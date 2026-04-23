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

  <section id="author-info" class="container">
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
  @use "_mixins/scr";

  .page-divider {
    opacity: 0;
    visibility: hidden;
  }

  #home {
    @include scr.desktop {
      height: 97vh;
    }

    @include scr.mobile {
      margin: 0 -20px;
      overflow: hidden;
    }

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

    @include scr.mobile {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  #title {
    position: absolute;
    top: 60px;
    left: -476px;

    text-align: right;

    @include font.main;

    z-index: 2;

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

    @include scr.mobile {
      top: 21px;
      left: -174px;

      h1 {
        font-size: 48px;
      }

      div {
        font-size: 14px;
      }
    }
  }

  #author-description {
    grid-column: 1 / 3;
    display: flex;

    p {
      margin: auto 0 0;

      font-size: 64px;
      font-weight: 100;

      text-align: right;

      @include scr.mobile {
        font-size: 22px;
      }
    }
  }

  #author-img {
    position: relative;
    grid-column: 3 / 7;
    aspect-ratio: 1 / 1;
    height: 100%;

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

    @include scr.mobile {
      height: 320px;
    }
  }

  #page-settings {
    position: absolute;
    display: flex;
    gap: 28px;
    left: 50%;
    user-select: none;
    transform: translateX(-50%);

    @include scr.mobile {
      top: 76px;
      right: 0;
      left: auto;
      transform: none;

      font-size: 14px;
      :global button {
        margin-right: 0;
      }
    }
  }

  #header-navigation {
    position: absolute;
    top: 0;
    left: 0;

    @include scr.mobile {
      :global {
        a {
          font-size: 13px;
        }
      }
    }
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

  #author-info {
    @include scr.mobile {
      margin-top: 42px;
      padding-left: 20px;
    }
  }
</style>