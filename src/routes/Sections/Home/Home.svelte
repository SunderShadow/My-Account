<script lang="ts">
  import navigation from "../../navigation.svelte.js"
  import Navigation from "$lib/components/Navigation/Navigation.svelte"
  import SwitchLanguage from "./SwitchLanguage.svelte"
  import SwitchTheme from "./SwitchTheme.svelte"
  import Figma from "$lib/components/_icons/Figma.svelte"
  import Github from "$lib/components/_icons/Github.svelte"
  import SectionDivider from "$lib/components/SectionDivider/SectionDivider.svelte"

  import authorEnhanced from "./author.png?enhanced&format=webp&quality=100"
  import {FIGMA_LAYOUT_URL, GITHUB_LAYOUT_URL} from "$env/static/public"
</script>

<div id="home">
  <div class="page-divider"><SectionDivider title="Главная" id="home" /></div>
  <header>
    <div id="header-navigation">
      <Navigation items={navigation} />
    </div>

    <div id="page-settings">
      <SwitchLanguage />
      <SwitchTheme />
    </div>

    <div id="relative-links">
      <a href={FIGMA_LAYOUT_URL}><Figma /></a>
      <a href={GITHUB_LAYOUT_URL}><Github /></a>
    </div>
  </header>

  <section class="container">
    <div id="author-description">
      <p>
        Специалист<br>
        в области<br>
        web-разработки<br>
        с 3х летним<br>
        опытом
      </p>
    </div>
    <div id="author-img">
      <div id="title">
        <h1>Hello World</h1>
        <div>Alexandr Shvedov</div>
      </div>
      <img src={authorEnhanced.img.src} alt="">
    </div>
  </section>
</div>

<style lang="scss">
  @use "_mixins/font";

  .page-divider {
    opacity: 0;
    visibility: hidden;
  }
  #home {
    height: 97vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex-grow: 1;
  }

  header {
    height: 75px;
    display: flex;
    position: relative;
    margin-bottom: 30px;
  }

  #title {
    position: absolute;
    top: 60px;
    left: -476px;

    text-align: right;

    @include font.main;

    h1 {
      font-size: 128px;
      margin: 0;
      font-weight: 400;
      letter-spacing: -6%;
    }

    div {
      font-size: 36px;
      letter-spacing: 41%;
    }
  }

  #author-description {
    grid-column: 1 / 3;
    display: flex;
  }

  p {
    margin: auto 0 0;

    font-size: 76px;
    font-weight: 100;

    text-align: right;
  }

  #author-img {
    position: relative;
    grid-column: 3 / 7;
    aspect-ratio: 1 / 1;
    max-height: 85vh;

    &::before {
      position: absolute;
      content: '';
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.0025) 100%);
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    img {
      width: 100%;
    }
  }

  #page-settings {
    position: absolute;
    display: flex;
    gap: 28px;
    left: 50%;
    user-select: none;
    transform: translateX(-50%);
  }

  #header-navigation {
    position: absolute;
    top: 0;
    left: 0;
  }

  #relative-links {
    margin-left: auto;
    display: flex;
    gap: 8px;

    a {
      cursor: pointer;
      opacity: .5;

      transition-property: opacity;
      transition-duration: var(--transition-duration);
      &:hover {
        opacity: .75;
      }
    }
  }
</style>