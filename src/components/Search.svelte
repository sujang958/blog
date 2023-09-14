<script lang="ts">
  import { getCollection, type CollectionEntry } from "astro:content"
  import Fuse from "fuse.js"
  import { onMount } from "svelte"

  export let posts: (CollectionEntry<"post">)[] = <any>[]

  getCollection("post").then((collection) => (posts = collection))

  let searchWindowShown = false

  const fuse = new Fuse(posts, {
    keys: ['data.title', 'data.category', "data.date", "data.description", ]
  })

  let query = ""
  let queryInput: HTMLInputElement

  onMount(() => {
    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "/":
          event.preventDefault()
          queryInput.focus()
          break;
        case "Escape":
          searchWindowShown = false
        default:
          break;
      }
    })

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLElement)) return
      if (event.target.closest("#search-container")) return
    
      searchWindowShown = false
    })
  })

  $: fuse.setCollection(posts)
</script>


<button type="button" class="cursor-pointer" on:click={() => searchWindowShown = !searchWindowShown}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 stroke-black dark:stroke-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
</button>

{#if searchWindowShown}
  <div class="fixed bg-black/10 inset-0 flex flex-col items-center backdrop-blur-sm px-10 md:px-24">
    <div class="flex flex-col my-24 max-w-xl w-full rounded-lg dark:bg-neutral-800 dark:text-white text-black bg-neutral-100 px-2.5 py-2 overflow-auto relative" id="search-container">
      <!-- svelte-ignore a11y-autofocus -->
      <input type="text" class="rounded-lg bg-neutral-200 dark:bg-neutral-900 border-neutral-300 sticky top-0" autofocus placeholder="Press / to focus" bind:value={query} bind:this={queryInput} >
      <div class="py-1"></div>
      <section class="flex flex-col gap-y-2 py-1">
        <!-- TODO: solve tab prob and use matches to higlight matches (like chakraui hightlight) -->
        {#each fuse.search(query) as result}
          <a href="/posts/{result.item.slug}" class="flex flex-col items-start p-2 cursor-pointer rounded-lg hover:bg-black/20">
            <p class="text-sm dark:text-neutral-300 text-neutral-600">{result.item.data.category}</p>
            <p class="text-xl font-bold">{result.item.data.title}</p>
            <p class="mt-1.5 text-sm dark:text-neutral-300 text-neutral-600">{(new Date(result.item.data.date)).toLocaleDateString("en-US")}</p>
          </a>
        {/each}
        
      </section>
    </div>
  </div>
{/if}