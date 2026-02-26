import cloudflare from '@astrojs/cloudflare';
import db from '@astrojs/db';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		imageService: 'cloudflare',
		platformProxy: {
			enabled: true,
		},
	}),

	integrations: [sitemap(), db()],
	site: 'https://zozhy.com',

	vite: {
		plugins: [tailwindcss()],
	},
});
