import React, { StrictMode, Suspense, lazy } from "react"
import { createRoot } from "react-dom/client"

import "../../tma-ui/assets/wallet_animations/src/index.css"
import "./shell.css"

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

window.Telegram = window.Telegram || {}
window.Telegram.WebApp = window.Telegram.WebApp || {
    initData: "",
    platform: "ios",
    themeParams: {
        bg_color: "#000000",
        text_color: "#ffffff",
        secondary_bg_color: "#1c1c1d",
        button_color: "#3e88f7",
        button_text_color: "#ffffff",
        bottom_bar_bg_color: "#1d1d1d",
        section_bg_color: "#2c2c2e",
    },
    BackButton: createButton(),
    MainButton: createButton(),
    SecondaryButton: createButton(),
    SettingsButton: createButton(),
    HapticFeedback: {
        selectionChanged() {},
        impactOccurred() {},
        notificationOccurred() {},
    },
    setHeaderColor() {},
    setBackgroundColor() {},
    setBottomBarColor() {},
    expand() {},
    onEvent() {},
    offEvent() {},
}

const WalletDemo = lazy(async () => {
    const [
        { default: MotionProvider },
        { default: DeviceProvider },
        { default: AppearanceProvider },
        { SnackbarProvider },
        { default: Wallet },
    ] = await Promise.all([
        import("../../tma-ui/assets/wallet_animations/src/components/MotionProvider/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/hooks/DeviceProvider/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/hooks/AppearanceProvider/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/components/Snackbar/index.js"),
        import("../../tma-ui/assets/wallet_animations/src/pages/prototypes/Wallet/index.js"),
    ])

    return {
        default: function WalletDemoScreen() {
            return (
                <MotionProvider>
                    <DeviceProvider>
                        <AppearanceProvider>
                            <SnackbarProvider>
                                <div className="demo-shell">
                                    <div className="demo-frame">
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

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Suspense fallback={<div className="demo-loading">Loading wallet components...</div>}>
            <WalletDemo />
        </Suspense>
    </StrictMode>
)
