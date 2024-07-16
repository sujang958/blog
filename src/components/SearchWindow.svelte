<script lang="ts">
  import { searchWindowShown } from "./stores"

  import { getCollection, type CollectionEntry } from "astro:content"
  import Fuse from "fuse.js"
  import { onMount } from "svelte"

  export let posts: CollectionEntry<"post">[] = <any>[]

  getCollection("post").then((collection) => (posts = collection))

  const fuse = new Fuse(posts, {
    keys: ["data.title", "data.category", "data.date", "data.description"],
  })

  let query = ""
  let queryInput: HTMLInputElement

  onMount(() => {
    document.addEventListener("keypress", (event) => {
      switch (event.key) {
        case "/":
          event.preventDefault()
          queryInput.focus()
          break
        case "Escape":
          $searchWindowShown = false
        default:
          break
      }
    })

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLElement)) return
      if (event.target.closest("#search-container")) return

      $searchWindowShown = false
    })
  })

  $: fuse.setCollection(posts)

  searchWindowShown.subscribe((shown) => {
    if (shown) setTimeout(() => queryInput.focus(), 1)
  })
</script>

<div
  class="fixed inset-0 z-50 flex h-screen flex-col items-center bg-black/10 px-10 backdrop-blur md:px-24 {$searchWindowShown
    ? 'block'
    : 'hidden'}"
>
  <div
    class="relative my-24 flex w-full max-w-xl flex-col overflow-auto overscroll-none rounded-lg bg-neutral-100 px-2.5 py-2 text-black dark:bg-neutral-800 dark:text-white"
    id="search-container"
  >
    <input
      type="text"
      class="sticky top-0 rounded-lg border-neutral-300 bg-neutral-200 dark:bg-neutral-900"
      placeholder="Press / to focus"
      bind:value={query}
      bind:this={queryInput}
    />
    <div class="py-1"></div>
    <section class="flex flex-col gap-y-2 py-1">
      <!-- TODO: solve tab prob and use matches to higlight matches (like chakraui hightlight) -->
      {#each fuse.search(query) as result}
        <a
          href="/posts/{result.item.slug}"
          class="flex cursor-pointer flex-col items-start rounded-lg p-2 hover:bg-black/20"
        >
          <p class="text-sm text-neutral-600 dark:text-neutral-300">
            {result.item.data.category}
          </p>
          <p class="text-xl font-bold">{result.item.data.title}</p>
          <p class="mt-1.5 text-sm text-neutral-600 dark:text-neutral-300">
            {new Date(result.item.data.date).toLocaleDateString("en-US")}
          </p>
        </a>
      {/each}
    </section>
  </div>
</div>
