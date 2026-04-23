<script lang="ts" module>
  export type Props = {
    title: string,
    id: string
  }
</script>
<script lang="ts">
  import {onMount} from "svelte"
  import {getSectionBoundContext} from "$lib/context/page_section_bounds"

  let {
    title,
    id
  }: Props = $props()

  // @ts-ignore
  let dividerEl: HTMLDivElement = $state()
  let selectorId = $derived('#' + id)

  let context = getSectionBoundContext()

  onMount(() => {
    const dividerElBoundY = dividerEl.getBoundingClientRect().top + window.scrollY

    context.bounds.push({top: dividerElBoundY, id: selectorId})
  })
</script>

<div class="section-divider" bind:this={dividerEl}>
  <hr>
  <h2 class="section-name">{title}</h2>
</div>

<style lang="scss">
  @use "_mixins/font";
  @use "_mixins/scr";

  .section-divider {
    position: relative;
  }

  .section-name {
    position: absolute;
    top: 0;
    left: 0;

    margin: 0;

    @include font.main;
    font-weight: 400;
    font-size: 32px;

    opacity: .5;

    @include scr.mobile {
      font-size: 12px;
    }
  }
</style>