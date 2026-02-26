import { type Config } from 'prettier';

export default {
	overrides: [
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],

	plugins: [
		'prettier-plugin-sort-json',
		'prettier-plugin-sh',
		'prettier-plugin-packagejson',
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
	],

	printWidth: 100,
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
} satisfies Config;
