<script lang="ts">
  import { onMount } from "svelte"

  let isDarkMode: boolean = false
  let isDecided: boolean = false

  onMount(() => {
    const storedDarkThemeSetting = localStorage.getItem("darkTheme")
    if (storedDarkThemeSetting)
      isDarkMode = storedDarkThemeSetting == "dark" ? true : false
    else if (window.matchMedia)
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches

    isDecided = true
  })

  $: isDarkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark")

  $: isDecided &&
    (isDarkMode
      ? localStorage.setItem("darkTheme", "dark")
      : localStorage.setItem("darkTheme", "light"))
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<p class="cursor-pointer" on:click={() => (isDarkMode = !isDarkMode)}>
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
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
</p>
