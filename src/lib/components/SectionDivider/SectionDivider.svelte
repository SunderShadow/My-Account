<script lang="ts" module>
  export type Props = {
    title: string,
    id: string
  }

  import {createContext} from "svelte"

  export type SectionBoundContext = {
    bounds: Array<{
      top: number, id: string
    }>
  }

  export const [getSectionBoundContext, setSectionBoundContext] = createContext<SectionBoundContext>()

  /**
   * Invoke `cb` if window bound reaches another page divider
   * @param sectionBoundContext
   * @param cb
   */
  export function onActiveBoundChange(sectionBoundContext: SectionBoundContext, cb: (sectionId: string) => void) {
    const context = sectionBoundContext
    let currentSectionId: string = ''
    function calcCurrentSection() {
      const scrollY = window.scrollY + window.innerHeight / 3
      for (let i = 0; i < context.bounds.length - 1; i++) {
        if (context.bounds[i].top < scrollY && context.bounds[i + 1].top > scrollY) {
          if (context.bounds[i].id === currentSectionId) {
            return
          }

          currentSectionId = context.bounds[i].id
          cb(currentSectionId)

          return
        }
      }

      if (currentSectionId !== context.bounds[context.bounds.length - 1].id) {
        currentSectionId = context.bounds[context.bounds.length - 1].id
        cb(currentSectionId)
      }
    }

    calcCurrentSection()
    window.addEventListener('scroll', calcCurrentSection)
  }
</script>
<script lang="ts">
  import {onMount} from "svelte"

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