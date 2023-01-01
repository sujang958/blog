<script lang="ts">
  interface PostItemProps {
    title: string
    category: string
    description: string
    date: string
    image: string
    id: string
  }

  export let data: PostItemProps | any

  const { title, category, date, description, image, id } = data
</script>

<a
  href={`/posts/${id}`}
  class="flex flex-col md:flex-row justify-center md:space-x-16 cursor-pointer items-center group"
>
  <div
    class="flex-none w-full md:w-auto rounded-lg overflow-hidden bg-white p-4 flex flex-col items-center justify-center"
  >
    <img
      alt="The Thumbnail"
      src={image}
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
        {category}
      </p>
      <p
        class="text-3xl md:text-5xl font-bold group-hover:text-blue-500 transition duration-300"
      >
        {title}
      </p>
      <p class="text-base md:text-xl font-medium py-3">
        {description}
      </p>
    </div>
    <p
      class="mt-2 text-sm md:text-lg text-black/70 dark:text-white/70 font-medium"
    >
      {Intl.DateTimeFormat("us-en", {}).format(new Date(Number(date)))}
    </p>
  </div>
</a>
