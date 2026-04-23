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
  import {home_author_description, page_home} from "$lib/paraglide/messages"
  import AppearAnimation from "$lib/components/AppearAnimation/AppearAnimation.svelte"
</script>

<svelte:head>
  <link rel="preload" as="image" href={authorEnhanced.img.src} fetchpriority="high">
</svelte:head>

<div id="home">
  <div class="page-divider"><SectionDivider title={page_home()} id="home" /></div>
  <header>
    <div id="header-navigation">
      <AppearAnimation delay="4">
        <Navigation items={navigation} />
      </AppearAnimation>
    </div>

    <div id="page-settings">
      <AppearAnimation to="bottom">
        <SwitchLanguage />
      </AppearAnimation>
<!--      <SwitchTheme />-->
    </div>

    <div id="relative-links">
      <AppearAnimation to="left" delay="4">
        <a href={FIGMA_LAYOUT_URL} aria-label="Go to Figma"><Figma /></a>
        <a href={GITHUB_LAYOUT_URL} aria-label="Go to Github"><Github /></a>
      </AppearAnimation>
    </div>
  </header>

  <section id="author-info" class="container">
      <div id="author-description">
        <AppearAnimation delay="6">
          <p>
            <span>{@html home_author_description()}</span>
          </p>
        </AppearAnimation>
      </div>
    <div id="author-img">
      <div id="title">
        <AppearAnimation delay="3">
          <h1>Hello World</h1>
          <div>Alexandr Shvedov</div>
        </AppearAnimation>
      </div>
      <AppearAnimation delay="2" to="left">
        <div class="img">
          <img src={authorEnhanced.img.src} alt="Александр Шведов">
        </div>
      </AppearAnimation>
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
      @media (min-height: 1020px) {
        padding-bottom: calc(100vh - 1020px);
      }
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

    z-index: 5;

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

    :global > * {
      margin: auto 0 0;
    }

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

    .img {
      &::before {
        position: absolute;
        content: '';
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.0025) 100%);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
      }
    }

    @include scr.mobile {
      img {
        object-position: top center;
        height: 320px;
      }
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