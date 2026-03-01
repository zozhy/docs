import { db, Guidelines } from 'astro:db';

export default async function seedGuidelines() {
	await db.insert(Guidelines).values([
		{
			authority: 'who',
			title: 'WHO guidelines on physical activity and sedentary behaviour',
			url: 'https://www.who.int/publications/i/item/9789240015128',
			year: 2020,
		},
		{
			authority: 'who',
			title: 'Total fat intake for the prevention of unhealthy weight gain in adults and children: WHO guideline',
			url: 'https://www.who.int/publications/i/item/9789240073654',
			year: 2023,
		},
		{
			authority: 'who',
			title: 'Carbohydrate intake for adults and children: WHO guideline',
			url: 'https://www.who.int/publications/i/item/9789240073593',
			year: 2023,
		},
		{
			authority: 'who',
			title: 'Guideline: sugars intake for adults and children',
			url: 'https://www.who.int/publications/i/item/9789241549028',
			year: 2015,
		},
		{
			authority: 'who',
			title: 'Guideline: sodium intake for adults and children',
			url: 'https://www.who.int/publications/i/item/9789241504836',
			year: 2012,
		},
		{
			authority: 'who',
			title: 'Guideline: potassium intake for adults and children',
			url: 'https://www.who.int/publications/i/item/9789241504829',
			year: 2012,
		},
	]);
}
