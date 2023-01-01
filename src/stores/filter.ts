import { writable } from "svelte/store"

export type Cateogries = "Frontend" | "JavaScript"

export interface FilterInterface {
  category: {
    // [key in Cateogries]: boolean
    [key: string]: boolean
  }
  date: {
    start: Date
    end: Date
  }
}

const Filter = writable<FilterInterface>({
  category: {
    Frontend: false,
    JavaScript: false,
  },
  date: {
    start: new Date("2022-12-01"),
    end: new Date(),
  },
})

export default Filter
