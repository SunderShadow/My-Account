<script lang="ts">
  import {getLocale, setLocale} from "$lib/paraglide/runtime"

  function switchLanguage() {
    if (getLocale() === 'ru') {
      setLocale('en')
    } else {
      setLocale('ru')
    }
  }
</script>

<div class="switch">
  <div class="caption">Language</div>
  <button onclick={switchLanguage}>
    <span>{getLocale()}</span>

    <!-- Arrows -->
    <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.0625 1.84094H24.3125V1.59094H24.0625V1.84094ZM11.9482 1.66417C11.8506 1.7618 11.8506 1.92009 11.9482 2.01772L13.5392 3.60871C13.6368 3.70634 13.7951 3.70634 13.8928 3.60871C13.9904 3.51108 13.9904 3.35279 13.8928 3.25516L12.4786 1.84094L13.8928 0.426729C13.9904 0.329098 13.9904 0.170807 13.8928 0.0731754C13.7951 -0.0244557 13.6368 -0.0244557 13.5392 0.0731754L11.9482 1.66417ZM0.25 25.1222H0L-2.98023e-08 25.3722H0.25L0.25 25.1222ZM12.6768 25.299C12.7744 25.2013 12.7744 25.0431 12.6768 24.9454L11.0858 23.3544C10.9882 23.2568 10.8299 23.2568 10.7322 23.3544C10.6346 23.4521 10.6346 23.6104 10.7322 23.708L12.1464 25.1222L10.7322 26.5364C10.6346 26.634 10.6346 26.7923 10.7322 26.89C10.8299 26.9876 10.9882 26.9876 11.0858 26.89L12.6768 25.299ZM24.0625 13.7784H24.3125V1.84094H24.0625H23.8125V13.7784H24.0625ZM24.0625 1.84094V1.59094H12.125V1.84094V2.09094H24.0625V1.84094ZM0.250002 12.8722H2.07126e-06L0 25.1222H0.25H0.5L0.500002 12.8722H0.250002ZM0.25 25.1222L0.25 25.3722L12.5 25.3722V25.1222V24.8722L0.25 24.8722L0.25 25.1222Z" fill="white"/>
    </svg>
  </button>
</div>

<style lang="scss">
  @use "_mixins/font";

  .caption, button {
    opacity: .5;
  }

  span {
    text-transform: uppercase;
  }
  button {
    width: 36px;
    height: 39px;

    display: block;
    position: relative;
    background: none;
    border: none;

    color: var(--text-color);
    padding: 10px;

    margin-top: 6px;
    margin-left: auto;
    margin-right: auto;

    cursor: pointer;

    font-size: 12px;

    @include font.main;

    transition-property: opacity;
    transition-duration: 300ms;

    &:hover {
      opacity: .75;
    }

    svg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
</style>