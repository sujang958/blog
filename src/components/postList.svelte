<script lang="ts">
  import type { MarkdownInstance } from "astro"
  import Filter from "../stores/filter"
  import PostItem from "./postItem.svelte"

  export let posts: MarkdownInstance<Record<string, any>>[]

  Object.freeze(posts)

  // let postsBeingSeen = posts
  //   .sort(
  //     ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) =>
  //       date1 - date2
  //   )
  //   .reverse()

  // // $: postsBeingSeen = postsBeingSeen
  // //   .sort(
  // //     ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) =>
  // //       date1 - date2
  // //   )
  // //   .reverse()

  // Filter.subscribe(({ category }) => {
  //   const selectedCategories = Object.entries(category)
  //     .filter(([_, selected]) => selected)
  //     .map(([name]) => name)

  //   if (selectedCategories.length < 1) return (postsBeingSeen = posts)

  //   postsBeingSeen = posts.filter(({ frontmatter }) => {
  //     console.log(JSON.stringify(frontmatter))
  //     return selectedCategories.includes(frontmatter.category)
  //   })
  //   console.log(postsBeingSeen)
  // })
</script>

<div class="flex flex-col space-y-16">
  {#each posts as post}
    <PostItem data={post.frontmatter} />
  {/each}
</div>
