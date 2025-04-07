import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default defineConfig([
	{
		languageOptions: { globals: { ...globals.node, ...globals.browser } },
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			indent: ['error', 'tab'],
			'prettier/prettier': ['error', { endOfLine: 'auto' }],
		},
	},
	{
		ignores: ['dist'],
	},
	eslintPluginPrettierRecommended,
])
