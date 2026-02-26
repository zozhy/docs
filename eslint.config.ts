import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import astro from 'eslint-plugin-astro';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginSecurity from 'eslint-plugin-security';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
	globalIgnores(['.astro', '.vscode', '.wrangler', '**/*.d.ts']),

	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: { projectService: true },
		},
	},

	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,

	pluginSecurity.configs.recommended,
	eslintPluginUnicorn.configs.all,
	perfectionist.configs['recommended-natural'],
	astro.configs.recommended,

	eslintConfigPrettier,

	{
		rules: {
			'perfectionist/sort-objects': ['error', { partitionByNewLine: true }],
		},
	},
);
