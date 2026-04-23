<script lang="ts" module>
  import type {Snippet} from "svelte"

  export type Props = {
    img: {
      src: string,
      alt: string
    },
    href: string,
    title: string,
    logos?: Snippet,
    alignRight?: boolean
  }
</script>

<script lang="ts">
  let {
    img,
    title,
    logos,
    href,
    alignRight = false
  }: Props = $props()
</script>

<article class="project" class:align-right={alignRight}>
  <div class="img">
    <img src={img.src} alt={img.alt}>
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2C22 0.89543 21.1046 0 20 0H2C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4H18V20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20V2ZM2 20L3.41421 21.4142L21.4142 3.41421L20 2L18.5858 0.585786L0.585786 18.5858L2 20Z" fill="white"/>
    </svg>
  </div>

  <h3><a {href}>{title}</a></h3>
  {#if logos}
    <div class="logos">{@render logos()}</div>
  {/if}
</article>

<style lang="scss">
  @use "_mixins/font";
  @use "_mixins/scr";

  article {
    position: relative;
    &.align-right {
      text-align: right;
    }
  }

  article:hover .img {
    svg {
      --size: 25px;
    }
  }

  .img {
    position: relative;

    @include scr.mobile {
      svg {display: none}
    }

    svg {
      --size: 20px;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1;

      width: var(--size);
      height: var(--size);

      transition-property: width, height;
      transition-duration: var(--transition-duration);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(230deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 10%);
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    margin: 20px 0;

    font-size: 36px;
    font-weight: 500;
    @include font.main;

    text-transform: uppercase;

    @include scr.mobile {
      margin: 12px 0;
      font-size: 16px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a::before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }

  article.align-right .logos {
    justify-content: end;
  }

  .logos {
    display: flex;
    gap: 24px;
    align-items: center;

    @include scr.mobile {
      gap: 8px;
    }

    :global > * {
      max-height: 20px;
      width: auto;
    }
  }
</style>