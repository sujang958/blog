import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const postCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/post" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.number(),
    image: z.string(),
  }),
})

export const collections = {
  post: postCollection,
}
