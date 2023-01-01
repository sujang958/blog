<script lang="ts">
  import Filter from "../stores/filter"
</script>

<div class="flex flex-row items-center py-6 space-x-4">
  {#each Object.entries($Filter.category).filter(([_, selected]) => selected) as [name, selected]}
    <button
      on:click={() => {
        $Filter.category[name] = false
      }}
      class="bg-black text-white rounded-3xl px-4 py-1.5 transition duration-300 flex flex-row items-center space-x-3"
    >
      <p>{name}</p>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </button>
  {/each}
</div>
