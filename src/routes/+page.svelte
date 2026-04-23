<script lang="ts">
  import {
    author_full_name,
    author_job_name
  } from "$lib/paraglide/messages"

  import HomeSection from "./Sections/Home/Home.svelte"
  import AboutMeSection from "./Sections/About-me/AboutMe.svelte"
  import ContactMeSection from "./Sections/Contact-me/ContactMe.svelte"
  import ProjectsSection from "./Sections/Projects/Projects.svelte"

  import Lenis from "lenis"

  import {onMount} from "svelte"

  import {setScrollContext} from "$lib/context/scrollContext"
  import {setSectionBoundContext} from "$lib/context/page_section_bounds"

  import {page} from "$app/state"
  import {goto} from "$app/navigation"

  let context = setSectionBoundContext({
    bounds: []
  })

  onMount(() => {
    window.addEventListener('scroll', (e) => {
      const scrollY = window.scrollY + 200
      let currentSectionId: null|string = null
      for (let i = 0; i < context.bounds.length - 1; i++) {
        if (context.bounds[i].top < scrollY && context.bounds[i + 1].top > scrollY) {
          currentSectionId = context.bounds[i].id
          break
        }
      }

      if (!currentSectionId) {
        currentSectionId = context.bounds[context.bounds.length - 1].id
      }

      if (!page.url.href.endsWith(currentSectionId)) {
        goto(currentSectionId, {
          replaceState: true,
          keepFocus: true,
          noScroll: true
        })
      }
    })
  })

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
  <AboutMeSection />
  <ProjectsSection />
  <ContactMeSection />
</div>

<style lang="scss">
  @use "_mixins/scr";

  #page-container {
    padding: 32px 40px;

    @include scr.mobile {
      padding: 32px 20px;
    }
  }
</style>