# Russian UI Typography

## Safe Defaults

- No period after short headings, button labels, menu items, chips, tabs, and field labels.
- Avoid exclamation marks in ordinary product UI.
- Use percent without a space: `50%`.
- Use a non-breaking space between number and currency/significant unit: `1 000 ₽`, `5 км`.
- Use a non-breaking space in dates where wrapping would hurt scanning: `12 апреля`.
- Use meaningful link text instead of raw URLs or "здесь".
- Use Russian quotes for titles in Russian UI when quotes are needed: `«...»`.

## Hyphen And Dashes

- Use hyphen inside ordinary compound words.
- Use non-breaking hyphen for short technical compounds that should not wrap awkwardly: `QR‑код`, `ПИН‑код`, `СМС‑код`.
- Use en dash or em dash according to the project's typography conventions; do not mix randomly.
- Use minus sign for negative numeric values when the UI supports it: `−5%`.

## Numbers And Money

Prefer:
- `1 000 ₽`, not `1000 ₽` or `1 000 ₽`;
- `50%`, not `50 %`;
- `до 12 апреля`, not `до 12 апреля` when the date may wrap.

## What Not To Auto-Fix Without Context

- Legal text.
- Markdown links and HTML snippets.
- ICU plural/select strings.
- Spaces inside code, IDs, URLs, filenames, or placeholders.
- Dashes when they may encode a product name or user-entered value.
