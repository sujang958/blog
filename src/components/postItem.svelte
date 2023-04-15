<script lang="ts">
  import type { CollectionEntry } from "astro:content"

  export let post: CollectionEntry<"post">

  const { data, slug } = post
</script>

<a
  href={`/posts/${slug}`}
  class="flex flex-col md:flex-row justify-center md:space-x-16 cursor-pointer items-center group"
>
  <div
    class="flex-none w-full md:w-auto rounded-lg overflow-hidden bg-white p-4 flex flex-col items-center justify-center"
  >
    <img
      alt="The Thumbnail"
      src={data.image}
      width={200}
      height={200}
      loading="lazy"
      class="object-contain"
    />
  </div>
  <div class="flex-1 flex flex-col justify-between py-2 md:mt-0 mt-8">
    <div>
      <p
        class="text-lg md:text-xl text-black/70 dark:text-white/70 font-medium"
      >
        {data.category}
      </p>
      <p
        class="text-3xl md:text-5xl font-bold group-hover:text-blue-500 transition duration-300"
      >
        {data.title}
      </p>
      <p class="text-base md:text-xl font-medium py-3">
        {data.description}
      </p>
    </div>
    <p
      class="mt-2 text-sm md:text-lg text-black/70 dark:text-white/70 font-medium"
    >
      {Intl.DateTimeFormat("us-en", {}).format(new Date(data.date))}
    </p>
  </div>
</a>
