import { defineConfig } from "vite"
import { ViteEjsPlugin } from "vite-plugin-ejs"

export default defineConfig(() => {
	return {
		plugins: [
			ViteEjsPlugin((viteConfig) => {
				return {
					env: viteConfig.env,
				}
			}),
		],
	}
})
