import React, { useMemo, useState } from "react"

const TOKEN_GROUPS = [
    {
        id: "telegram",
        title: "Telegram Theme",
        description: "Base Telegram Mini App variables used by wallet surfaces.",
        tokens: [
            ["--tg-theme-bg-color", "#ffffff", "#000000", "App background"],
            ["--tg-theme-text-color", "#000000", "#ffffff", "Primary text"],
            ["--tg-theme-secondary-bg-color", "#efeff4", "#1c1c1d", "Page background"],
            ["--tg-theme-button-color", "#007aff", "#3e88f7", "Primary action"],
            ["--tg-theme-button-text-color", "#ffffff", "#ffffff", "Primary action text"],
            ["--tg-theme-subtitle-text-color", "#8e8e93", "#98989e", "Secondary text"],
            ["--tg-theme-destructive-text-color", "#ff3b30", "#eb5545", "Destructive text"],
            ["--tg-theme-section-bg-color", "#ffffff", "#2c2c2e", "Grouped section"],
            ["--tg-theme-accent-text-color", "#007aff", "#3e88f7", "Links and accents"],
            ["--tg-theme-section-header-text-color", "#6d6d72", "#8d8e93", "Section headers"],
            ["--tg-theme-section-separator-color", "#c8c7cc", "#545458", "Opaque separators"],
            ["--tg-theme-bottom-bar-bg-color", "#f2f2f2", "#1d1d1d", "Bottom bar"],
            ["--tg-theme-hint-color", "#8e8e93", "#98989e", "Hints and placeholders"],
        ],
    },
    {
        id: "aliases",
        title: "Aliases And Fills",
        description: "Component aliases layered on top of Telegram tokens.",
        tokens: [
            ["--secondary-button-color", "rgb(0 122 255 / 0.1)", "rgb(62 136 247 / 0.1)", "Secondary buttons"],
            ["--text-confirm-color", "#34c759", "#30d158", "Success and confirmations"],
            ["--tertiary-fill-background", "rgb(116 116 128 / 0.12)", "rgb(120 120 128 / 0.24)", "Tertiary fill"],
            ["--quaternary-fill-background", "rgb(116 116 128 / 0.08)", "rgb(120 120 128 / 0.18)", "Quaternary fill"],
            ["--separator-non-opaque", "rgb(60 60 67 / 0.36)", "rgb(84 84 88 / 0.65)", "Non-opaque separators"],
            ["--segmented_control_active_background", "#ffffff", "#636366", "Segmented active state"],
            ["--button-disabled-color", "#e9e8e8", "#3c3c3e", "Disabled controls"],
            ["--text-disabled-color", "#bababa", "#606060", "Disabled text"],
            ["--border-color", "rgb(142 142 147 / 0.5)", "rgb(152 152 158 / 0.4)", "Soft borders"],
        ],
    },
    {
        id: "materials",
        title: "Materials And Toasts",
        description: "Blur material colors plus notification surfaces.",
        tokens: [
            ["--background-material-regular-color-1", "rgb(255 255 255 / 0.25)", "rgb(0 0 0 / 0.41)", "Glass layer one"],
            ["--background-material-regular-color-2", "rgb(255 255 255 / 0.6)", "rgb(0 0 0 / 0)", "Glass layer two"],
            ["--toast-background", "rgb(45 45 45 / 0.8)", "rgb(45 45 45 / 0.8)", "Apple toast background"],
            ["--toast-text", "#ffffff", "#ffffff", "Toast text"],
            ["--toast-link", "#5ac8fa", "#5ac8fa", "Apple toast link"],
            ["--material-toast-background", "rgb(40 48 57 / 0.92)", "rgb(40 48 57 / 0.92)", "Material toast background"],
            ["--material-toast-link", "#85caff", "#85caff", "Material toast link"],
        ],
    },
]

const ALL_GROUP = { id: "all", title: "All Tokens" }

function toTokenObjects(group) {
    return group.tokens.map(([name, light, dark, usage]) => ({
        name,
        light,
        dark,
        usage,
    }))
}

function isDark(value) {
    const numbers = value.match(/\d+(\.\d+)?/g)?.map(Number)

    if (!numbers || numbers.length < 3) {
        return false
    }

    const [r, g, b] = numbers
    return (r * 299 + g * 587 + b * 114) / 1000 < 150
}

function StorySwatch({ token, scheme }) {
    const value = token[scheme]
    const dark = isDark(value)

    return (
        <article className="tma-swatch">
            <div className="tma-swatch-preview" style={{ background: value }}>
                <span data-dark={dark}>{value}</span>
            </div>
            <div className="tma-swatch-body">
                <strong>{token.name}</strong>
                <span>{token.usage}</span>
            </div>
        </article>
    )
}

function TokenColumn({ title, scheme, groups }) {
    return (
        <section className="tma-token-column">
            <div className="tma-column-header">
                <h2>{title}</h2>
                <span>{groups.reduce((count, group) => count + group.tokens.length, 0)} tokens</span>
            </div>
            {groups.map((group) => (
                <div className="tma-token-group" key={group.id}>
                    <div className="tma-group-title">
                        <h3>{group.title}</h3>
                        <p>{group.description}</p>
                    </div>
                    <div className="tma-swatch-grid">
                        {toTokenObjects(group).map((token) => (
                            <StorySwatch key={token.name} token={token} scheme={scheme} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

function PreviewPhone({ scheme }) {
    const vars = Object.fromEntries(
        TOKEN_GROUPS.flatMap((group) =>
            toTokenObjects(group).map((token) => [token.name, token[scheme]])
        )
    )

    return (
        <section className="tma-preview-phone" data-color-scheme={scheme} style={vars}>
            <div className="tma-phone-header">
                <span>{scheme}</span>
                <strong>TMA Wallet</strong>
            </div>
            <div className="tma-balance-card">
                <span>Balance</span>
                <strong>$13 568.85</strong>
                <small>+0.82 today</small>
            </div>
            <div className="tma-actions-row">
                <button>Transfer</button>
                <button>Deposit</button>
            </div>
            <div className="tma-list-card">
                <div>
                    <strong>Toncoin</strong>
                    <span>5.061 TON</span>
                </div>
                <b>$26.62</b>
            </div>
            <div className="tma-toast-sample">
                <span>Copied</span>
                <a>Open</a>
            </div>
        </section>
    )
}

export default function TmaColorStorybook() {
    const [activeGroup, setActiveGroup] = useState("all")

    const visibleGroups = useMemo(
        () => (activeGroup === "all" ? TOKEN_GROUPS : TOKEN_GROUPS.filter((group) => group.id === activeGroup)),
        [activeGroup]
    )

    const totalTokens = TOKEN_GROUPS.reduce((count, group) => count + group.tokens.length, 0)

    return (
        <main className="tma-storybook">
            <aside className="tma-storybook-rail">
                <div className="tma-storybook-brand">
                    <span>tma-ui</span>
                    <strong>Color Storybook</strong>
                </div>
                <nav aria-label="Token groups">
                    {[ALL_GROUP, ...TOKEN_GROUPS].map((group) => (
                        <button
                            className={activeGroup === group.id ? "active" : ""}
                            key={group.id}
                            onClick={() => setActiveGroup(group.id)}
                        >
                            {group.title}
                        </button>
                    ))}
                </nav>
                <div className="tma-storybook-source">
                    <span>Source</span>
                    <code>tma-ui/references/colors.md</code>
                    <small>Telegram variables, component aliases, material, and toast tokens.</small>
                </div>
            </aside>

            <section className="tma-storybook-canvas">
                <header className="tma-storybook-header">
                    <div>
                        <p>Telegram Mini Apps</p>
                        <h1>Color Tokens</h1>
                    </div>
                    <div className="tma-storybook-stats">
                        <span>{totalTokens} tokens</span>
                        <span>Light + Dark</span>
                        <span>SB Sans UI</span>
                    </div>
                </header>

                <div className="tma-preview-grid">
                    <PreviewPhone scheme="light" />
                    <PreviewPhone scheme="dark" />
                </div>

                <div className="tma-token-columns">
                    <TokenColumn title="Light" scheme="light" groups={visibleGroups} />
                    <TokenColumn title="Dark" scheme="dark" groups={visibleGroups} />
                </div>
            </section>
        </main>
    )
}
