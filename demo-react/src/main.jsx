import React, { StrictMode, Suspense, lazy, useState } from "react"
import { createRoot } from "react-dom/client"

import "../../tma-ui/assets/wallet_animations/src/index.css"
import "./shell.css"
import TmaColorStorybook from "./tmaColorStorybook.jsx"

const TELEGRAM_THEME_PARAMS = {
    light: {
        bg_color: "#ffffff",
        text_color: "#000000",
        secondary_bg_color: "#efeff4",
        button_color: "#007aff",
        button_text_color: "#ffffff",
        subtitle_text_color: "#8e8e93",
        destructive_text_color: "#ff3b30",
        section_bg_color: "#ffffff",
        accent_text_color: "#007aff",
        section_header_text_color: "#6d6d72",
        section_separator_color: "#c8c7cc",
        bottom_bar_bg_color: "#f2f2f2",
        hint_color: "#8e8e93",
    },
    dark: {
        bg_color: "#000000",
        text_color: "#ffffff",
        secondary_bg_color: "#1c1c1d",
        button_color: "#3e88f7",
        button_text_color: "#ffffff",
        subtitle_text_color: "#98989e",
        destructive_text_color: "#eb5545",
        section_bg_color: "#2c2c2e",
        accent_text_color: "#3e88f7",
        section_header_text_color: "#8d8e93",
        section_separator_color: "#545458",
        bottom_bar_bg_color: "#1d1d1d",
        hint_color: "#98989e",
    },
}

const DEFAULT_SCHEME = "light"
const telegramEventHandlers = new Map()

const createButton = () => ({
    show() {},
    hide() {},
    onClick() {},
    offClick() {},
    setParams() {},
    setText() {},
    enable() {},
    disable() {},
    showProgress() {},
    hideProgress() {},
})

const emitTelegramEvent = (eventName) => {
    telegramEventHandlers.get(eventName)?.forEach((handler) => handler())
}

const applyTelegramTheme = (scheme, { emit = true } = {}) => {
    const params = TELEGRAM_THEME_PARAMS[scheme]
    const root = document.documentElement

    root.dataset.colorScheme = scheme
    document.body.dataset.colorScheme = scheme
    root.style.setProperty("--tg-color-scheme", scheme)

    Object.entries(params).forEach(([key, value]) => {
        root.style.setProperty(`--tg-theme-${key.replaceAll("_", "-")}`, value)
    })

    window.Telegram.WebApp.colorScheme = scheme
    window.Telegram.WebApp.themeParams = {
        ...window.Telegram.WebApp.themeParams,
        ...params,
    }

    if (emit) {
        emitTelegramEvent("themeChanged")
    }
}

window.Telegram = window.Telegram || {}
const existingWebApp = window.Telegram.WebApp || {}

window.Telegram.WebApp = {
    ...existingWebApp,
    initData: existingWebApp.initData ?? "",
    platform: existingWebApp.platform ?? "ios",
    colorScheme: DEFAULT_SCHEME,
    themeParams: {
        ...TELEGRAM_THEME_PARAMS[DEFAULT_SCHEME],
        ...existingWebApp.themeParams,
    },
    BackButton: existingWebApp.BackButton ?? createButton(),
    MainButton: existingWebApp.MainButton ?? createButton(),
    SecondaryButton: existingWebApp.SecondaryButton ?? createButton(),
    SettingsButton: existingWebApp.SettingsButton ?? createButton(),
    HapticFeedback: existingWebApp.HapticFeedback ?? {
        selectionChanged() {},
        impactOccurred() {},
        notificationOccurred() {},
    },
    setHeaderColor: existingWebApp.setHeaderColor ?? (() => {}),
    setBackgroundColor: existingWebApp.setBackgroundColor ?? (() => {}),
    setBottomBarColor: existingWebApp.setBottomBarColor ?? (() => {}),
    expand: existingWebApp.expand ?? (() => {}),
    onEvent(eventName, handler) {
        const handlers = telegramEventHandlers.get(eventName) ?? new Set()
        handlers.add(handler)
        telegramEventHandlers.set(eventName, handlers)
    },
    offEvent(eventName, handler) {
        telegramEventHandlers.get(eventName)?.delete(handler)
    },
}

applyTelegramTheme(DEFAULT_SCHEME, { emit: false })

const WalletDemo = lazy(async () => {
    const [
        { default: MotionProvider },
        { default: DeviceProvider },
        { default: AppearanceProvider },
        { SnackbarProvider },
        { default: SegmentedControl },
        { default: Wallet },
    ] = await Promise.all([
        import("../../tma-ui/assets/wallet_animations/src/components/MotionProvider/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/hooks/DeviceProvider/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/hooks/AppearanceProvider/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/components/Snackbar/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/components/SegmentedControl/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/pages/prototypes/Wallet/index.js"),
    ])

    function ThemeSwitcher() {
        const [scheme, setScheme] = useState(DEFAULT_SCHEME)

        const handleThemeChange = (index) => {
            const nextScheme = index === 1 ? "dark" : "light"

            setScheme(nextScheme)
            applyTelegramTheme(nextScheme)
            window.Telegram.WebApp.HapticFeedback.selectionChanged()
        }

        return (
            <div className="demo-controls">
                <SegmentedControl
                    aria-label="Theme"
                    colorScheme={scheme}
                    defaultIndex={scheme === "dark" ? 1 : 0}
                    onChange={handleThemeChange}
                    segments={["Light", "Dark"]}
                    type="circled"
                />
            </div>
        )
    }

    return {
        default: function WalletDemoScreen() {
            return (
                <MotionProvider>
                    <DeviceProvider>
                        <AppearanceProvider>
                            <SnackbarProvider>
                                <div className="demo-shell">
                                    <div className="demo-frame">
                                        <ThemeSwitcher />
                                        <Wallet />
                                    </div>
                                </div>
                            </SnackbarProvider>
                        </AppearanceProvider>
                    </DeviceProvider>
                </MotionProvider>
            )
        },
    }
})

function App() {
    const [view, setView] = useState("colors")

    return (
        <>
            <div className="demo-view-switcher" role="tablist" aria-label="Demo views">
                <button
                    className={view === "colors" ? "active" : ""}
                    role="tab"
                    aria-selected={view === "colors"}
                    onClick={() => setView("colors")}
                >
                    TMA colors
                </button>
                <button
                    className={view === "wallet" ? "active" : ""}
                    role="tab"
                    aria-selected={view === "wallet"}
                    onClick={() => setView("wallet")}
                >
                    Wallet preview
                </button>
            </div>
            {view === "colors" ? (
                <TmaColorStorybook />
            ) : (
                <Suspense fallback={<div className="demo-loading">Loading wallet components...</div>}>
                    <WalletDemo />
                </Suspense>
            )}
        </>
    )
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
)
