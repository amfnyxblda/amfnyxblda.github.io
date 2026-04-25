import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // New in v5/v6

const blog = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		category: z.string().optional(),
		author: z.string(),
		tags: z.array(z.string()).optional(),
		readingTime: z.number().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
