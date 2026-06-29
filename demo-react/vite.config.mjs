import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig, transformWithEsbuild } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

const here = path.dirname(fileURLToPath(import.meta.url))
const workspace = path.resolve(here, "..")
const demoNodeModules = path.resolve(here, "node_modules")
const upstreamSrc = path.resolve(workspace, "tma-ui/assets/wallet_animations/src")
const upstreamJsWithJsx = /tma-ui\/assets\/wallet_animations\/src\/.*\.js$/

function walletAnimationsJsx() {
    return {
        name: "wallet-animations-jsx",
        enforce: "pre",
        transform(code, id) {
            const filename = id.split("?")[0]

            if (!upstreamJsWithJsx.test(filename)) {
                return null
            }

            return transformWithEsbuild(code, filename, {
                loader: "jsx",
                jsx: "automatic",
            })
        },
    }
}

export default defineConfig({
    base: "/",
    plugins: [
        walletAnimationsJsx(),
        react({
            include: /\.(jsx?|tsx?)$/,
        }),
        svgr({
            svgrOptions: {
                svgoConfig: {
                    plugins: [
                        {
                            name: "preset-default",
                            params: {
                                overrides: {
                                    removeViewBox: false,
                                },
                            },
                        },
                    ],
                },
            },
        }),
    ],
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.[jt]sx?$/,
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                ".js": "jsx",
            },
        },
        include: ["lottie-react", "motion", "motion/react", "motion/react-m"],
    },
    resolve: {
        alias: {
            react: path.resolve(demoNodeModules, "react"),
            "react-dom": path.resolve(demoNodeModules, "react-dom"),
            "prop-types": path.resolve(demoNodeModules, "prop-types"),
            motion: path.resolve(demoNodeModules, "motion"),
            "wouter/use-hash-location": path.resolve(demoNodeModules, "wouter/src/use-hash-location.js"),
            "wouter/use-browser-location": path.resolve(demoNodeModules, "wouter/src/use-browser-location.js"),
            "wouter/memory-location": path.resolve(demoNodeModules, "wouter/src/memory-location.js"),
            wouter: path.resolve(demoNodeModules, "wouter/src/index.js"),
            calligraph: path.resolve(demoNodeModules, "calligraph"),
            "lottie-react": path.resolve(demoNodeModules, "lottie-react"),
            "markdown-to-jsx": path.resolve(demoNodeModules, "markdown-to-jsx"),
            colorthief: path.resolve(demoNodeModules, "colorthief"),
            "@": upstreamSrc,
            "@components": path.resolve(upstreamSrc, "components"),
            "@hooks": path.resolve(upstreamSrc, "hooks"),
            "@pages": path.resolve(upstreamSrc, "pages"),
            "@router": path.resolve(upstreamSrc, "router"),
            "@utils": path.resolve(upstreamSrc, "utils"),
            "@lib": path.resolve(upstreamSrc, "lib"),
            "@icons": path.resolve(upstreamSrc, "icons"),
            "@images": path.resolve(upstreamSrc, "images"),
            "lottie-web": "lottie-web/build/player/lottie_light",
        },
    },
    server: {
        host: "127.0.0.1",
        port: 5173,
        fs: {
            allow: [workspace],
        },
    },
})
