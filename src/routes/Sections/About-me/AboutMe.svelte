<script lang="ts">
  import imgEnhanced from './img.png?enhanced&format=webp&quality=100'

  import {
    text_childhood_title,
    text_childhood_content,
    text_company_title,
    text_company_content,
    text_inspiration, page_about_me,
  } from "$lib/paraglide/messages"

  import SectionDivider from "$lib/components/SectionDivider/SectionDivider.svelte"
  import AppearAnimation from "$lib/components/AppearAnimation/AppearAnimation.svelte"
</script>

<svelte:head>
  <link rel="preload" as="image" href={imgEnhanced.img.src} fetchpriority="high">
</svelte:head>

<section id="about-me">
  <SectionDivider title={page_about_me()} id="about-me"/>

  <div class="container">
    <div class="img">
      <div>
        <AppearAnimation delay="3">
          <img src={imgEnhanced.img.src} alt="Рюкзак с вещами для путешествий">
        </AppearAnimation>
      </div>
    </div>

    <div class="content">
      <AppearAnimation to="top">
        <h3>{text_childhood_title()}</h3>
        <p>{text_childhood_content()}</p>
      </AppearAnimation>
    </div>

    <div class="content">
      <AppearAnimation to="top">
        <h3>{text_company_title()}</h3>
        <p>{text_company_content()}</p>
      </AppearAnimation>
    </div>

    <div class="inspiration-text">
      <AppearAnimation to="top">
        {@html text_inspiration()}
      </AppearAnimation>
    </div>
  </div>
</section>

<style lang="scss">
  @use "_mixins/font";
  @use "_mixins/scr";

  section {
    position: relative;

    @include scr.desktop {
      height: 100vh;
    }
  }

  .container {
    height: 100%;

    @include scr.desktop {
      grid-template-rows: repeat(2, 1fr);
    }

    @include scr.mobile {
      grid-template-rows: auto 150px;
    }
  }

  .img {
    position: relative;

    @include scr.desktop {
      grid-column: span 2;
      grid-row: span 2;
    }

    > * {
      position: absolute;
      right: 0;
      bottom: 108px;
    }

    img {
      height: 622px;
    }

    @include scr.mobile {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 0;

      > * {
        height: 100%;
        bottom: auto;
        right: -40px;

        opacity: .2;
      }
    }
  }

  .inspiration-text {
    grid-column: span 4;

    @include scr.desktop {
      grid-column: 3 / 7;
      grid-row: 2;
    }

    font-style: normal;
    font-weight: 600;
    font-size: 63px;
    text-align: center;
    line-height: 170%;

    @include font.main;
    color: #FFFFFF;

    text-shadow: 0 0 35.4px rgba(255, 255, 255, 0.46);

    @include scr.mobile {
      font-size: 25px;
    }
  }

  #about-me {
    margin-top: 45px;
  }

  .content {
    position: relative;
    grid-column: span 2;

    z-index: 1;
    @include scr.desktop {
      font-size: 20px;
    }

    line-height: 1.7;

    h3 {
      font-weight: 500;
    }

    p {
      font-weight: 200;
    }
  }
 </style>