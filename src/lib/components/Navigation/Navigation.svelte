<script lang="ts" module>
  export type Item = {
    title: string,
    href: string
  }

  export type Props = {
    items: Item[]
  }
</script>
<script lang="ts">
  import {page} from "$app/state"
  import {goto} from "$app/navigation"

  function onLinkClick(e: Event, href: string) {
     e.preventDefault();
     goto(href, {
       replaceState: true,
       noScroll: true
     })
  }

  function isPageActive(href) {
    return href === page.url.hash
  }

  let {
    items
  }: Props = $props()
</script>
{#snippet linkIcon()}
  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.76394 0.496124C6.7618 0.21999 6.53621 -0.00212556 6.26008 1.50204e-05L1.76021 0.0348977C1.48408 0.0370382 1.26196 0.262624 1.2641 0.538758C1.26625 0.814893 1.49183 1.03701 1.76797 1.03487L5.76785 1.00386L5.79885 5.00374C5.80099 5.27987 6.02658 5.50199 6.30271 5.49985C6.57885 5.49771 6.80096 5.27212 6.79882 4.99599L6.76394 0.496124ZM0.356262 6.5L0.712546 6.8508L6.62024 0.850802L6.26395 0.5L5.90767 0.149198L-2.11895e-05 6.1492L0.356262 6.5Z" fill="white"/>
  </svg>
{/snippet}

<nav>
  {#each items as {href, title}}
    <a {href}
      onclick={(e) => {onLinkClick(e, href)}}
      class:active={isPageActive(href)}
    >
      <span>{title}</span>
      {@render linkIcon()}
    </a>
  {/each}
</nav>

<style lang="scss">
  @use "_mixins/font";

  nav {
    width: fit-content;
  }

  a + a {
    margin-top: 4px;
  }

  a {
    // Flex options
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    // Padding
    padding-bottom: 4px;

    // Border
    border-bottom: 1px solid #FFF;

    // Font
    font-size: 20px;
    color: var(--text-color);
    text-decoration: none;

    // Transition
    transition-property: opacity;
    transition-duration: var(--transition-duration);

    opacity: .75;

    user-select: none;

    @include font.main();

    &.active {
      cursor: default;
    }
    &:not(.active, :hover) {
      opacity: .5;
    }
  }
</style>