<script lang="ts">
  import { getCollection, type CollectionEntry } from "astro:content"

  export let posts: CollectionEntry<"post">[] = <any>[]

  getCollection("post").then((collection) => (posts = collection))

  let searchWindowShown = false
</script>


<button type="button" class="cursor-pointer" on:click={() => searchWindowShown = !searchWindowShown}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 stroke-black dark:stroke-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
</button>

{#if !searchWindowShown}
  <div class="fixed bg-black/10 inset-0 flex flex-col items-center backdrop-blur-sm px-24">
    <div class="flex flex-col mt-24 max-w-xl w-full rounded-lg bg-neutral-700 px-2.5 py-2">
      <input type="text" class="rounded-lg" placeholder="/ to focus" >
      <div class="py-1"></div>
      <section class="flex flex-col gap-y-2 py-1">
        <div class="flex flex-col p-2 cursor-pointer rounded-lg hover:bg-black/20">
          <p class="text-sm text-neutral-900">TypeScript</p>
          <p class="text-xl font-bold">Jotai only accepts WritableAtom</p>
          <p class="mt-1 text-sm text-neutral-900">9/9/2023</p>
        </div>
      </section>
    </div>
  </div>
{/if}