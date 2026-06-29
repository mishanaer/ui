# Source Components

Use this reference before implementing or adapting any Sber TMA component.

## Bundled Source

The full upstream snapshot is bundled at:

```text
assets/wallet_animations/
```

Important paths:

- `assets/wallet_animations/src/components/` - reusable UI components.
- `assets/wallet_animations/src/pages/prototypes/*/components/` - prototype-specific wallet/navigation/trading components.
- `assets/wallet_animations/src/hooks/` - required hooks for skin, appearance, focus, resize, anchored positioning, modal state, split view, and media queries.
- `assets/wallet_animations/src/lib/twa/` - Telegram Web App wrapper and native button components.
- `assets/wallet_animations/src/utils/` - animation constants, number helpers, lazy preload, view transitions.
- `assets/wallet_animations/src/icons/` and `assets/wallet_animations/src/images/` - icons, Lottie files, SVGs, and images used by components.
- `assets/wallet_animations/public/` - public fonts and favicon.
- `assets/wallet_animations/LICENSE` - upstream MIT license.

## Component Workflow

1. Search the bundled source for an existing match:

```bash
rg --files assets/wallet_animations/src | rg '(^|/)(components|hooks|utils|lib|icons|images)(/|$)'
rg -n "ComponentName|interaction|surface|tab|modal|wallet" assets/wallet_animations/src
```

2. Copy the closest upstream component and every local dependency it imports.
3. Keep behavior first: animation timing, gestures, focus handling, Telegram safe-area behavior, and platform skins should survive the port.
4. Adapt import paths, CSS module names, type system, and project primitives to the target repo.
5. Only simplify after the copied component renders and behaves correctly.

## Dependency Rules

- Use the target repo's package manager and lockfile.
- If `motion`, `lottie-react`, `wouter`, `calligraph`, `spoiled`, or `markdown-to-jsx` are missing and the copied component needs them, add them through the target package manager.
- If the target repo is TypeScript, convert copied PropTypes/JS incrementally instead of mixing styles long-term.
- If the target repo lacks SCSS Modules, either enable support according to the existing stack or translate the module to the local scoped styling system.

## License

The bundled upstream is MIT licensed. When copying substantial upstream source into another repository, preserve the license obligations in that target repository.
