import { persisted } from "svelte-persisted-store"
import { writable } from "svelte/store"

export const searchWindowShown = writable(false)

export const dark = persisted("dark", false)
