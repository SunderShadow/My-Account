<script lang="ts">
  import {
    author_full_name,
    author_job_name
  } from "$lib/paraglide/messages"

  import HomeSection from "./Sections/Home/Home.svelte"
  import AboutMeSection from "./Sections/About-me/AboutMe.svelte"
  import ContactMeSection from "./Sections/Contact-me/ContactMe.svelte"
  import ProjectsSection from "./Sections/Projects/Projects.svelte"

  import {meta_description} from "$lib/paraglide/messages"

  import Lenis from "lenis"

  import {onMount} from "svelte"

  import {setSectionBoundContext, onActiveBoundChange} from "$lib/components/SectionDivider/SectionDivider.svelte"
  import {goto} from "$app/navigation"

  let sectionBoundContext = setSectionBoundContext({
    bounds: [],
    activeBound: {active: false}
  })

  onMount(() => {
    onActiveBoundChange(sectionBoundContext, (sectionId) => {
      goto(sectionId, {
        replaceState: true,
        noScroll: true,
        keepFocus: true
      })
    })
  })

  onMount(() => {
    new Lenis({
      autoRaf: true,
      anchors: {
        duration: 2
      }
    })
  })
</script>

<svelte:head>
  <title>{author_job_name()} {author_full_name()}</title>

  <meta name="description" content={meta_description()}>
</svelte:head>

<main id="page-container">
  <HomeSection />
  <AboutMeSection />
  <ProjectsSection />
  <ContactMeSection />
</main>

<style lang="scss">
  @use "_mixins/scr";

  #page-container {
    padding: 0 40px 32px 40px;

    @include scr.mobile {
      padding: 0 40px 20px 40px;
    }
  }
</style>