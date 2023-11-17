import { component$, useSignal, useVisibleTask$, useTask$ } from "@builder.io/qwik";
import { isBrowser } from "@utils/qwik";

const DARK_THEME_KEY = "darkTheme"

export const DarkModeButton = component$(() => {
  const isDarkMode = useSignal(true);

  useTask$(() => {
    if (!isBrowser) return

    isDarkMode.value = localStorage.getItem(DARK_THEME_KEY) == "dark";
  }, { eagerness: "load" })
  useVisibleTask$(({ track }) => {
    track(() => isDarkMode.value);

    document.documentElement.classList[isDarkMode.value ? "add" : "remove"]("dark");
    localStorage.setItem(DARK_THEME_KEY, isDarkMode.value ? "dark" : "light");
  });

  return (
    <button class="cursor-pointer" onClick$={() => isDarkMode.value = !isDarkMode.value}>
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
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    </button>
  );
});
