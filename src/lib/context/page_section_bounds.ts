import {createContext} from "svelte"

export const [getSectionBoundContext, setSectionBoundContext] = createContext<{
  bounds: {top: number, id: string}[]
}>()