# UI Skills

Reusable Codex skills for UI work.

## uxw

`uxw` helps draft, rewrite, review, and lint Russian product interface microcopy without binding the rules to a specific brand. It focuses on UI strings: locale files, headings, buttons, errors, labels, placeholders, tooltips, hints, empty states, loading states, legal copy inside interfaces, and short typography.

Useful checks:

```sh
python3 uxw/scripts/extract_ui_strings.py src/locales/ru.json --format json
python3 uxw/scripts/ui_text_lint.py src/locales/ru.json
```

## interface-redpolicy

`interface-redpolicy` helps draft, rewrite, and review Russian interface copy against a universal editorial policy synthesized from Ozon UX writing, Raiffeisen's "Текст в интерфейсе", and T-Bank interface redpolicy principles. It is useful for product-team guidelines, UI copy audits, component-specific microcopy, tone checks, error states, legal-sensitive UI copy, and launch checklists.

## sber-tma

`sber-tma` helps build and review polished Sber-styled Telegram Mini App interfaces. It bundles the `IlyaGrshin/wallet_animations` source so agents can reuse its React components directly, then adapt Telegram WebView-safe routing, native TWA surfaces, Apple/Material skins, theme tokens, SB Sans typography, and motion patterns to other projects.
