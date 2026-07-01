#!/usr/bin/env python3
"""Run deterministic evals for the uxw skill scripts."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[2]
CASES_PATH = ROOT / "evals" / "uxw" / "cases.json"
EXTRACT = ROOT / "uxw" / "scripts" / "extract_ui_strings.py"
LINT = ROOT / "uxw" / "scripts" / "ui_text_lint.py"
RULES = ROOT / "uxw" / "references" / "rules.json"


class EvalFailure(AssertionError):
    pass


def run_command(script: Path, args: list[str]) -> tuple[int, str, str]:
    command = [sys.executable, str(script), *args]
    result = subprocess.run(command, cwd=ROOT, text=True, capture_output=True)
    return result.returncode, result.stdout, result.stderr


def parse_json_output(case_name: str, stdout: str) -> Any:
    try:
        return json.loads(stdout or "[]")
    except json.JSONDecodeError as exc:
        raise EvalFailure(f"{case_name}: expected JSON output, got {stdout!r}") from exc


def assert_exit(case: dict[str, Any], code: int, stderr: str) -> None:
    expected = case.get("expected_exit")
    if expected is not None and code != expected:
        raise EvalFailure(f"{case['name']}: expected exit {expected}, got {code}. stderr={stderr!r}")


def assert_items(case: dict[str, Any], items: list[dict[str, Any]]) -> None:
    for expected in case.get("expect_items", []):
        matches = [item for item in items if all(item.get(key) == value for key, value in expected.items())]
        if not matches:
            raise EvalFailure(f"{case['name']}: missing extracted item {expected!r}")

    for expected_value in case.get("expect_values", []):
        if not any(item.get("value") == expected_value for item in items):
            raise EvalFailure(f"{case['name']}: missing extracted value {expected_value!r}")


def assert_issues(case: dict[str, Any], issues: list[dict[str, Any]]) -> None:
    if case.get("expect_no_issues") and issues:
        raise EvalFailure(f"{case['name']}: expected no issues, got {issues!r}")

    rule_ids = [issue.get("rule_id") for issue in issues]
    for rule_id in case.get("expect_rules", []):
        if rule_id not in rule_ids:
            raise EvalFailure(f"{case['name']}: missing rule {rule_id!r}; got {rule_ids!r}")

    for rule_id, expected_suggestion in case.get("expect_suggestions", {}).items():
        matches = [issue for issue in issues if issue.get("rule_id") == rule_id]
        if not matches:
            raise EvalFailure(f"{case['name']}: missing issue for suggestion rule {rule_id!r}")
        if not any(issue.get("suggestion") == expected_suggestion for issue in matches):
            raise EvalFailure(
                f"{case['name']}: expected suggestion {expected_suggestion!r} for {rule_id!r}; got {matches!r}"
            )


def assert_reference_rules(case: dict[str, Any]) -> None:
    rules = json.loads(RULES.read_text(encoding="utf-8"))
    rule_ids = {rule["id"] for rule in rules if rule.get("lintable")}
    expected_ids = set(case.get("expected_rule_ids", []))
    missing = sorted(expected_ids - rule_ids)
    if missing:
        raise EvalFailure(f"{case['name']}: rules.json missing lintable ids {missing!r}")


def run_case(case: dict[str, Any]) -> None:
    script_type = case["script"]
    if script_type == "extract":
        code, stdout, stderr = run_command(EXTRACT, case.get("args", []))
        assert_exit(case, code, stderr)
        assert_items(case, parse_json_output(case["name"], stdout))
        return

    if script_type == "lint":
        code, stdout, stderr = run_command(LINT, case.get("args", []))
        assert_exit(case, code, stderr)
        assert_issues(case, parse_json_output(case["name"], stdout))
        return

    if script_type == "rules":
        assert_reference_rules(case)
        return

    raise EvalFailure(f"{case['name']}: unknown script type {script_type!r}")


def main() -> int:
    cases = json.loads(CASES_PATH.read_text(encoding="utf-8"))
    failures: list[str] = []

    for case in cases:
        try:
            run_case(case)
            print(f"PASS {case['name']}")
        except EvalFailure as exc:
            failures.append(str(exc))
            print(f"FAIL {case['name']}: {exc}")

    if failures:
        print("\nFailures:")
        for failure in failures:
            print(f"- {failure}")
        return 1

    print(f"\n{len(cases)} uxw evals passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
