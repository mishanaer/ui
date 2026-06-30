# Code Review For UI Strings

## Before Editing

1. Find localization files and inline strings.
2. Identify format: JSON, YAML, JS object, i18n library, ICU, markdown, HTML, or framework template.
3. Check package manager from lockfiles before running project commands.
4. If the string contains variables or plural forms, preserve syntax exactly.

## Safe Edits

- Rewrite value strings while preserving keys.
- Fix punctuation and spacing when it cannot affect parsing.
- Keep escaping style and quote style consistent.
- Prefer minimal diffs in generated locale files.

## Risky Edits

Ask or leave a note before:
- changing localization keys;
- moving strings between components;
- editing tests that assert copy;
- changing legal-sensitive text;
- changing strings that are also API enum values, analytics labels, or backend contracts.

## Suggested Process

Run extractor when there are many files:

```bash
python3 uxw/scripts/extract_ui_strings.py src --format md
```

Run linter for heuristics:

```bash
python3 uxw/scripts/ui_text_lint.py src/locales/ru.json
```

Use linter warnings as prompts for human review. Some warnings are acceptable in legal, support, settings, and domain-specific flows.
