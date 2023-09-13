<script lang="ts">
  import { getCollection, type CollectionEntry } from "astro:content"

  export let posts: CollectionEntry<"post">[] = <any>[]

  getCollection("post").then((collection) => (posts = collection))
</script>


<button type="button">
  asdf
</button>