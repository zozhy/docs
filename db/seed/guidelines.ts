import { db, Guidelines } from 'astro:db';

export default async function seedGuidelines() {
	await db.insert(Guidelines).values([
		{
			authority: 'who',
			title: 'WHO guidelines on physical activity and sedentary behaviour',
			url: 'https://www.who.int/publications/i/item/9789240015128',
			year: 2020,
		},
	]);
}
