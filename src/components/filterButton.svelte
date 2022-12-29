<script lang="ts">
  import Filter from "../stores/filter"

  let filterWindowOpened: boolean = false
</script>

<button
  id="filter-button"
  on:click={() => (filterWindowOpened = !filterWindowOpened)}
  class="flex flex-row items-center space-x-2 bg-black text-white dark:bg-white dark:text-black/70 rounded-3xl px-4 py-2"
>
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
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
    />
  </svg>
  <p>Filter</p>
</button>

{#if filterWindowOpened}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="filter-window"
    on:click={(event) => {
      if (!event || !event.target) return
      // @ts-ignore
      if (event.target.id != "filter-window") return

      filterWindowOpened = false
    }}
    class="fixed top-0 bottom-0 right-0 left-0 z-50 bg-black/50 backdrop-blur-sm p-32 flex flex-col items-center justify-center"
  >
    <div
      class="flex flex-col max-w-2xl w-full h-full rounded-xl bg-white text-black py-6 px-8"
    >
      <button
        class="transition duration-300 hover:bg-black/5 p-2.5 rounded-3xl cursor-pointer ml-auto"
        on:click={() => (filterWindowOpened = false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="flex flex-col py-4 space-y-6">
        <p class="text-3xl font-semibold">
          Categories <span
            class="ml-2 cursor-pointer text-black/50 text-base underline font-normal"
            >Clear All</span
          >
        </p>
        <div class="flex flex-row items-center space-x-4">
          {#each Object.entries($Filter.category) as [name, selected]}
            <button
              on:click={() => ($Filter.category[name] = !selected)}
              class={`${
                selected ? "bg-black text-white" : "text-black bg-black/10"
              } rounded-3xl px-4 py-1.5 transition duration-300 flex flex-row items-center space-x-3`}
            >
              <p>{name}</p>
              <div class={`${!selected && "hidden"}`}>
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
      </div>
      <div class="flex flex-col py-4 space-y-6">
        <p class="text-3xl font-semibold">
          Dates <span
            class="ml-2 cursor-pointer text-black/50 text-base underline font-normal"
            >Reset</span
          >
        </p>
        <div class="flex flex-row items-center space-x-8">
          <label>
            <p class="text-lg mb-1">Start</p>
            <input
              type="date"
              class="rounded-lg p-1.5 text-black/70 border-black/20"
              value="2022-12-01"
            />
          </label>
          <label>
            <p class="text-lg mb-1">End</p>
            <input
              type="date"
              class="rounded-lg p-1.5 text-black/70 border-black/20"
              value={new Date().toISOString().split("T")[0]}
            />
          </label>
        </div>
      </div>
      <div class="mt-auto w-full flex flex-row items-center justify-end">
        <button
          on:click={() => (filterWindowOpened = false)}
          class="ml-auto bg-black text-white rounded-xl px-5 py-3 font-semibold"
          >Auto-applying is working</button
        >
      </div>
    </div>
  </div>
{/if}
