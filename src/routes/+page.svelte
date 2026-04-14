<script lang="ts">
  import {
    author_full_name,
    author_job_name
  } from "$lib/paraglide/messages"

  import HomeSection from "./Sections/Home/Home.svelte"
  import AboutMe from "./Sections/About-me/AboutMe.svelte"
  import {onMount} from "svelte"
  import Lenis from "lenis"
  import {setScrollContext} from "$lib/context/scrollContext"
  import Projects from "./Sections/Projects/Projects.svelte"

  // @ts-ignore
  let lenis: Lenis = $state()
  let scrollContext = $state({
    lenis
  })

  setScrollContext(scrollContext)

  onMount(() => {
    scrollContext.lenis = new Lenis({
      autoRaf: true,
      anchors: {
        duration: 2
      }
    });
  })
</script>

<svelte:head>
  <title>{author_job_name()} {author_full_name()}</title>
</svelte:head>

<div id="page-container">
  <HomeSection />
  <AboutMe />
  <Projects />
</div>

<style lang="scss">
  #page-container {
    padding: 32px 40px;
  }
</style>