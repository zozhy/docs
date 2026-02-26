import { AgeBands, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(AgeBands).values([
		// WHO guidelines on physical activity and sedentary behaviour
		{ ageMax: 17, ageMin: 5 },
		{ ageMax: 64, ageMin: 18 },
		{ ageMax: 150, ageMin: 65 },
		{ ageMax: 150, ageMin: 18 },
	]);
}
