---
name: interface-redpolicy
description: Universal Russian interface editorial policy based on Ozon UX writing, Raiffeisen "Текст в интерфейсе", and T-Bank interface redpolicy principles. Use when Codex needs to draft, rewrite, review, or systematize Russian product interface copy, create UI text guidelines, critique microcopy, prepare a redpolicy/checklist for product teams, or align headings, buttons, errors, labels, placeholders, tooltips, alerts, empty states, legal UI copy, and short service messages to one consistent interface writing standard.
---

# Interface Redpolicy

## Scope

Use this skill for Russian interface copy standards, not generic proofreading. It is strongest for product UI: headings, buttons, links, form labels, placeholders, errors, alerts, hints, tooltips, empty states, success states, onboarding, notifications, legal copy inside flows, and short typographic rules.

If the request is only about brand campaigns, long articles, PR, social posts, app-store release notes, or legal contracts outside UI, say that this policy is interface-first and apply only the parts that fit.

## Operating Model

1. Identify the screen or flow: user goal, current state, expected action, next step, risk, money, time, personal data, and product constraints.
2. Decide whether text is the right fix. Prefer deleting text or improving structure when the interface can explain itself.
3. Apply the policy in this order: meaning, sequence, tone, component syntax, typography, legal/product constraints.
4. For reviews, separate objective problems from taste. Mark legal-sensitive rewrites as `needs legal review`.
5. Keep final recommendations short and production-usable. Give examples when they clarify a rule.

## Core Rules

- Text exists to help the user complete a task.
- A screen must be understandable to a first-time user without hidden context.
- Put the important fact or action first.
- Be concrete, not abstract: replace `Ошибка`, `Внимание`, `Начисления` with the actual event or object.
- Remove ambiguity, especially around money, dates, commissions, subscriptions, personal data, and irreversible actions.
- Do not promise what the product cannot guarantee.
- Explain actions in the order the user performs them.
- Keep tone calm, respectful, neutral, and equal.
- Do not judge feelings, blame the user, fake concern, over-celebrate, or over-humanize the product.
- Make UI elements work both together and alone: the heading must read with the button, and controls must make sense without nearby prose.
- Preserve consistency: one object, action, and state should keep one name across the product.

## Read References

- Read `references/01-policy.md` when creating or rewriting a full redpolicy, guideline, or checklist.
- Read `references/02-components.md` when working with specific UI elements: headings, buttons, links, inputs, alerts, tooltips, empty states, errors, success states, or legal UI copy.
- Read `references/03-tone.md` when tone, voice, emotion, blame, friendliness, or neutrality is central to the task.
- Read `references/04-review.md` before reviewing existing interface text or producing a structured audit.
- Read `references/source-basis.md` when the user asks where the policy comes from or how Ozon, Raiffeisen, and T-Bank differ.
- Use `references/rules.json` for compact machine-readable checks or when building automated lint/audit prompts.

## Output Shapes

For rewriting one or several strings, return a compact table:

```md
| Было | Стало | Почему |
|---|---|---|
| ... | ... | ... |
```

For drafting from scratch, return 2-4 variants:

- `Базовый`: safest production copy.
- `Короткий`: for tight UI space.
- `Явный`: when consequence, risk, or next step must be explicit.
- `Мягкий`: only if the state is stressful and a calmer tone helps.

For a policy or audit, use sections:

```md
## Главные проблемы
## Предложенная версия
## Правила для команды
## Что проверить с продуктом/юристами
```

Omit empty sections for small tasks.
