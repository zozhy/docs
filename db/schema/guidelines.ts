import { column, defineTable } from 'astro:db';

export const Guidelines = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		authority: column.text({ enum: ['who', 'wcrf'] }),

		title: column.text({ unique: true }),

		year: column.number(),

		url: column.text({ unique: true }),
	},
});
