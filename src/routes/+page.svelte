<script lang="ts">
  import {
    author_full_name,
    author_job_name
  } from "$lib/paraglide/messages"

  import HomeSection from "./Sections/Home/Home.svelte"
  import AboutMe from "./Sections/About-me/AboutMe.svelte"

</script>

<svelte:head>
  <title>{author_job_name()} {author_full_name()}</title>
</svelte:head>

<div id="page-container">
  <HomeSection />
  <AboutMe />
</div>

<style lang="scss">
  #page-container {
    padding: 32px 40px;
  }
</style>