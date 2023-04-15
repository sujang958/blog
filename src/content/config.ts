import { defineCollection, z } from "astro:content"

const postCollection = defineCollection({
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
