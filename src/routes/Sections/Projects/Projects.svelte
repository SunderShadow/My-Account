<script lang="ts">
  import Project from "./Project.svelte"

  // Images
  import kosmosEnhanced from "./assets/kosmos.png?enhanced&format=webp&quality=100"
  import prodocEnhanced from "./assets/prodoc.png?enhanced&format=webp&quality=100"
  import micobuffEnhanced from "./assets/micobuff.png?enhanced&format=webp&quality=100"
  import Poehaly65 from "./logos/Poehaly65.svelte"
  import GastronomyInstitute from "./logos/GastronomyInstitute.svelte"
  import Roscosmos from "./logos/Roscosmos.svelte"
  import Sber from "./logos/Sber.svelte"
  import Sberhealth from "./logos/Sberhealth.svelte"
  import SectionDivider from "$lib/components/SectionDivider/SectionDivider.svelte"

  import {page_projects, projects_opening_phrase, projects_all_projects} from "$lib/paraglide/messages"
  import {PROJECT_DOC_PRO, PROJECT_MICOBUFF, PROJECT_FESTIVAL_KOSMOS} from "$env/static/public"
  import AppearAnimation from "$lib/components/AppearAnimation/AppearAnimation.svelte"
</script>

<section id="projects">
  <SectionDivider title={page_projects()} id="projects"/>

  <div class="opening_phrase">{projects_opening_phrase()}</div>

  <div class="container projects">
    <div class="project">
      <AppearAnimation>
        <Project href={PROJECT_FESTIVAL_KOSMOS} title="Всероссийский фестиваль ресторанов" img={{src: kosmosEnhanced.img.src, alt: ''}}>
          {#snippet logos()}
            <Roscosmos />
            <Sber />
            <GastronomyInstitute />
            <Poehaly65 />
          {/snippet}
        </Project>
      </AppearAnimation>
    </div>
    <div class="project">
      <AppearAnimation to="left">
        <Project href={PROJECT_DOC_PRO} alignRight title="Медицинское приложение" img={{src: prodocEnhanced.img.src, alt: ''}}>
          {#snippet logos()}
            <Sberhealth />
          {/snippet}
        </Project>
      </AppearAnimation>
    </div>
    <div class="project">
      <AppearAnimation to="top">
        <Project href={PROJECT_MICOBUFF} title="Лендинг технологии производства грибов" img={{src: micobuffEnhanced.img.src, alt: ''}}>
        </Project>
      </AppearAnimation>
    </div>
    <div id="go-to-all-projects">
      <AppearAnimation to="top">
        <a href="/projects">
          <span>{projects_all_projects()}</span>
          <svg width="185" height="185" viewBox="0 0 185 185" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.5" cx="92.5" cy="92.5" r="91" stroke="white" stroke-width="3"/>
            <path opacity="0.85" d="M129.299 95.5564C130.666 94.1896 130.666 91.9735 129.299 90.6067L107.025 68.3328C105.658 66.966 103.442 66.966 102.075 68.3328C100.708 69.6996 100.708 71.9157 102.075 73.2826L121.874 93.0815L102.075 112.881C100.708 114.247 100.708 116.463 102.075 117.83C103.442 119.197 105.658 119.197 107.025 117.83L129.299 95.5564ZM59.3396 93.0815L59.3396 96.5815L126.824 96.5815L126.824 93.0815L126.824 89.5815L59.3396 89.5815L59.3396 93.0815Z" fill="white"/>
          </svg>
        </a>
      </AppearAnimation>
    </div>
  </div>
</section>

<style lang="scss">
  @use "_mixins/font";
  @use "_mixins/scr";

  #projects {
    padding-bottom: 211px;

    @include scr.mobile {
      padding-bottom: 40px;
    }
  }

  .opening_phrase {
    font-size: 91px;
    font-weight: 700;
    @include font.main;

    text-transform: uppercase;
    text-align: center;

    margin-top: 196px;
    margin-bottom: 196px;

    @include scr.mobile {
      font-size: 20px;
      text-align: left;
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }

  .projects {
    row-gap: 140px;

    @include scr.mobile {
      row-gap: 40px;
    }
  }

  .projects {
    @include scr.mobile {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .project {
    grid-column: span 4;
  }
  @include scr.desktop {
    .project:nth-child(1) {
      grid-column: 1 / 6;
    }

    .project:nth-child(2) {
      grid-column: 3 / 7;
    }

    .project:nth-child(3) {
      grid-column: 1 / 4;
    }
  }

  #go-to-all-projects {
    @include scr.desktop {
      grid-column: 4 / 7;
    }

    @include scr.mobile {
      grid-column: span 4;
    }

    display: flex;
    align-items: center;
    justify-content: end;

    a {
      display: flex;
      align-items: center;
      gap: 42px;
      font-size: 48px;
      text-transform: uppercase;
      color: #FFF;
      text-decoration: none;

      @include scr.mobile {
        font-size: 20px;
        gap: 12px;
      }
    }

    @include scr.mobile {
      svg {
        width: 81px;
        height: 81px;
      }
    }
  }

</style>