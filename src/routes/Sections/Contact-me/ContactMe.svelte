<script lang="ts">
  import navigation from "../../navigation.svelte"
  import {AUTHOR_PHONE, AUTHOR_TELEGRAM} from "$env/static/public"
  import {working_time} from "$lang"

  import SectionDivider from "$lib/components/SectionDivider/SectionDivider.svelte"
  import Navigation from "$lib/components/Navigation/Navigation.svelte"
</script>

<section id="contact-me">
  <SectionDivider title="Связатся со мной" id="contact-me"/>

  <div id="call-time">{working_time()}</div>

  <h3>Через телеграм</h3>
  <p><a href="https://t.me/{AUTHOR_TELEGRAM}">@{AUTHOR_TELEGRAM}</a></p>
  <h3>По телефону</h3>
  <p><a href="tel:{AUTHOR_PHONE}">{AUTHOR_PHONE}</a></p>

  <div id="footer-author-name">Alexandr Shvedov</div>
  <div id="footer-navigation">
    <Navigation items={navigation} />
  </div>
</section>

<style lang="scss">
  @use "_mixins/font";

  #contact-me {
    position: relative;
    @include font.main;
  }

  #call-time {
    margin-top: 40px;
    margin-bottom: 172px;

    font-size: 91px;
    font-weight: 500;
    text-align: right;
  }

  h3 {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -6%;
    margin: 0;
    opacity: .5;
  }

  p {
    margin: 0;
  }

  p + h3 {
    margin-top: 80px;
  }

  a {
    font-size: 91px;
    color: inherit;
  }

  #footer-author-name {
    margin-top: 194px;

    font-weight: 400;
    font-size: 36px;
    letter-spacing: 0.41em;
  }

  #footer-navigation {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 413px;
    :global {
      nav {
        width: 100%;
      }
      a {
        font-size: 32px;
      }

      svg {
        width: 10px;
        height: 10px;
      }
    }
  }
</style>