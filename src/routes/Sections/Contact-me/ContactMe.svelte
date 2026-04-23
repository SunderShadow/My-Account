<script lang="ts">
  import navigation from "../../navigation.svelte"
  import {AUTHOR_PHONE, AUTHOR_TELEGRAM} from "$env/static/public"
  import {working_time} from "$lang"

  import SectionDivider from "$lib/components/SectionDivider/SectionDivider.svelte"
  import Navigation from "$lib/components/Navigation/Navigation.svelte"
  import {page_contact_me} from "$lib/paraglide/messages"
  import {contact_me_telegram, contact_me_phone} from "$lib/paraglide/messages"
  import AppearAnimation from "$lib/components/AppearAnimation/AppearAnimation.svelte"
</script>

<section id="contact-me">
  <SectionDivider title={page_contact_me()} id="contact-me"/>

  <div id="call-time">{working_time()}</div>

  <h3>{contact_me_telegram()}</h3>
  <p><a href="https://t.me/{AUTHOR_TELEGRAM}">@{AUTHOR_TELEGRAM}</a></p>
  <h3>{contact_me_phone()}</h3>
  <p><a href="tel:{AUTHOR_PHONE}">{AUTHOR_PHONE}</a></p>

  <AppearAnimation>
    <div id="footer-author-name">Alexandr Shvedov</div>
  </AppearAnimation>
    <div id="footer-navigation">
      <AppearAnimation to="left" delay="1">
        <Navigation items={navigation} />
      </AppearAnimation>
    </div>
</section>

<style lang="scss">
  @use "_mixins/font";
  @use "_mixins/scr";

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

    @include scr.mobile {
      margin-bottom: 40px;

      font-size: 24px;
      font-weight: 700;
    }
  }

  h3 {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -6%;
    margin: 0;
    opacity: .5;

    @include scr.mobile {
      font-size: 16px;
    }
  }

  p {
    margin: 0;
  }

  p + h3 {
    margin-top: 80px;

    @include scr.mobile {
      margin-top: 28px;
    }
  }

  a {
    font-size: 91px;
    color: inherit;

    @include scr.mobile {
      font-size: 40px;
      font-weight: 800;
    }
  }

  #footer-author-name {
    margin-top: 194px;

    font-weight: 400;
    font-size: 36px;
    letter-spacing: 0.41em;

    @include scr.mobile {
      font-size: 14px;
      margin-top: 94px;
      max-width: 145px;
    }
  }

  #footer-navigation {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 413px;

    @include scr.mobile {
      width: 150px;
    }

    :global {
      a {
        font-size: 32px;
        @include scr.mobile {
          font-size: 13px;
        }
      }

      svg {
        width: 10px;
        height: 10px;
      }
    }
  }
</style>