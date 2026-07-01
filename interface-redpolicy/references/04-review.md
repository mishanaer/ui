# Review Workflow

## Triage

Classify each issue before rewriting:

- `meaning`: unclear, abstract, ambiguous, misleading, wrong sequence;
- `tone`: blame, fake care, overacting, excess joy, emotional assumption;
- `component`: button, heading, label, link, tooltip, alert, empty state, error pattern;
- `risk`: money, legal, personal data, privacy, deletion, cancellation, subscription;
- `typography`: date, money, punctuation, line break, hanging preposition, consistency.

## Review Checklist

Check every important screen:

- Does a novice understand what is happening?
- Is the main meaning first?
- Can the text be read another way?
- Does the product promise only what it can guarantee?
- Are actions described in the order the user performs them?
- Does the heading read with the primary button?
- Do controls work without surrounding text?
- Are objects and actions named consistently?
- Are money, commission, deadlines, and limits explicit?
- Does the error explain recovery?
- Is critical information visible without opening a tooltip?
- Is the tone calm and equal?
- Are there any accusations, fake concern, or unnecessary excitement?
- Does the copy work for different genders?
- Does legal-sensitive copy need legal review?

## Suggested Output

For short reviews:

```md
| Место | Проблема | Предложение |
|---|---|---|
| ... | ... | ... |
```

For larger audits:

```md
## Критично
- ...

## Улучшить
- ...

## Предложенная версия
| Было | Стало | Почему |
|---|---|---|
| ... | ... | ... |

## Нужно уточнить
- ...
```

## Confidence Labels

Use confidence labels for nontrivial claims:

- `90-100%`: directly visible in text or UI context.
- `70-89%`: strong inference from flow, component, or established rule.
- `50-69%`: plausible but needs product context.
- `<50%`: ask for context instead of making a firm recommendation.

## Rewriting Rules

- Keep variables, placeholders, and localization syntax unchanged.
- Do not invent product capabilities.
- Do not silently change legal meaning.
- Preserve exact amounts, dates, terms, and named entities.
- If space is constrained, provide a short version and note what was removed.
