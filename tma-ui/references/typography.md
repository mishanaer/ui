# Typography And Skins

Use this reference when styling text or Apple/Material skins. For colors and theme tokens, read `colors.md`.

## Font Policy

- Use `SB Sans UI` from `assets/fonts/Interface` for all interface/body text on both Apple/iOS and Material/Android skins. This is the default TMA UI font.
- Always copy the Interface font files from `assets/fonts/Interface` into the target project before wiring the app font: at minimum `SBSansUI-Regular.otf`, `SBSansUI-Semibold.otf`, and `SBSansUI-Bold.otf`.
- Use `SB Sans Text Mono` for code, commands, IDs, timestamps, wallet addresses, hashes, and technical metrics.
- If the user explicitly asks to change typography, offer the bundled font list below and copy only the selected family files from `assets/fonts`.
- Do not fetch external font packages when a suitable bundled TMA UI font exists.
- Never map iOS/Apple to San Francisco or system stack, and never map Android/Material to Roboto. Platform skins may change type scale, density, weight mapping, elevation, and motion, but not the interface font family.
- Do not use Display, Text, Condensed, Extended, Serif, system UI, Geist, Inter, Roboto, or project defaults as the main interface/body font. Keep `SB Sans UI` from `assets/fonts/Interface` as the interface font and limit other families to explicit non-interface uses.

Bundled TMA UI font list:

| Family | Folder | Files | Best use |
|--------|--------|-------|----------|
| `SB Sans UI` | `assets/fonts/Interface` | `SBSansUI-Light.otf`, `SBSansUI-Regular.otf`, `SBSansUI-Semibold.otf`, `SBSansUI-Bold.otf`, `SBSansUI-Caps.otf` | Required default for interface/body text |
| `SB Sans Display` | `assets/fonts/Display` | `SBSansDisplay-Thin.otf`, `SBSansDisplay-Light.otf`, `SBSansDisplay-Regular.otf`, `SBSansDisplay-SemiBold.otf`, `SBSansDisplay-Bold.otf` | Brand, hero, and large marketing headings |
| `SB Sans Display Extended` | `assets/fonts/Extended` | `SBSansDisplay-ExtendedSemibold.ttf` | Loud campaign titles and wide display typography |
| `SB Sans Text Condensed` | `assets/fonts/Condensed` | `SBSansTextCond-Regular.otf`, `SBSansTextCond-Bold.otf` | Dense labels, narrow tables, compact metadata |
| `SB Sans Text Mono` | `assets/fonts/Mono` | `SBSansTextMono-Regular.otf`, `SBSansTextMono-Bold.otf` | Code, commands, IDs, timestamps, addresses, technical metrics |
| `SB Sans Cond Mono` | `assets/fonts/Mono` | `SBSansCondMono-Regular.otf`, `SBSansCondMono-Bold.otf` | Dense monospaced tables and compact technical columns |
| `SB Serif Display` | `assets/fonts/Serif/Display` | `SBSerifDisplay-Light.otf`, `SBSerifDisplay-LightItalic.otf`, `SBSerifDisplay-Regular.otf`, `SBSerifDisplay-Italic.otf`, `SBSerifDisplay-Semibold.otf`, `SBSerifDisplay-SemiboldItalic.otf`, `SBSerifDisplay-Bold.otf` | Editorial heroes and premium display headings |
| `SB Serif Text` | `assets/fonts/Serif/Text` | `SBSerifText-Light.otf`, `SBSerifText-LightItalic.otf`, `SBSerifText-Regular.otf`, `SBSerifText-Italic.otf`, `SBSerifText-SemiBold.otf`, `SBSerifText-SemiboldItalic.otf`, `SBSerifText-Bold.otf`, `SBSerifText-BoldItalic.otf`, `SBSerifText-Heavy.otf` | Editorial body copy and long-form reading surfaces |
| `SB Serif Condensed` | `assets/fonts/Serif/Text` | `SBSerifCondensed.otf` | Editorial labels and compact serif headings |

Copy font files into the target project and adjust URLs to match that project:

```css
@font-face {
  font-family: "SB Sans UI";
  src: url("/fonts/Interface/SBSansUI-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SB Sans UI";
  src: url("/fonts/Interface/SBSansUI-Semibold.otf") format("opentype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SB Sans UI";
  src: url("/fonts/Interface/SBSansUI-Bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root,
body.apple,
body.material {
  font-family: "SB Sans UI", ui-sans-serif, system-ui, sans-serif;
}
```

## Platform Skins

Map Telegram platform to UI skin:

- `ios`, `macos` -> `apple`.
- `android`, `android_x`, `tdesktop`, `webk`, `webz`, `unigram` -> `material`.

Apply `body.apple` or `body.material`. Do not branch on `navigator.userAgent` when Telegram platform is available.

Apple bias:

- `SB Sans UI` interface font with iOS-like type scale.
- Larger radii.
- Blur/glass where content underneath remains legible.
- Softer spring: stiffness around 640, damping 40.

Material bias:

- `SB Sans UI` interface font with Android/Telegram-like density.
- More solid surfaces and elevation.
- Stronger spring: stiffness around 800, damping 60.

## Text Primitive

Prefer one `Text` primitive that delegates variant mapping by skin:

```jsx
<Text
  apple={{ variant: "subheadline1", weight: "semibold" }}
  material={{ variant: "subheadline1", weight: "medium" }}
>
  Amount
</Text>
```

When overriding text color, set color on the wrapper and let text inherit. This keeps variant selectors and nested badges predictable.

Do not scale font size with viewport width. Use fixed token sizes with responsive layout constraints.

## Typography Hygiene

- Keep letter spacing at `0` unless matching an established native token.
- Reserve large display type for first-viewport hero-like screens, not compact panels.
- In dashboards/wallet lists, prioritize scanability: dense rows, stable columns, clear numeric alignment.

## Root Interaction Defaults

For TMA-like experiences:

```css
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: none;
}

input,
textarea {
  user-select: text;
}

button,
[role="button"] {
  touch-action: manipulation;
}
```

Use these only if the target app has no conflicting form/text-selection requirements.
