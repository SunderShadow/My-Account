import {createContext} from "svelte"
import type Lenis from "lenis"

export const [getScrollContext, setScrollContext] = createContext<{
  lenis: Lenis
}>()