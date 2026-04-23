<script lang="ts" module>
  export type Props = {
    title: string,
    id: string
  }

  import {createContext} from "svelte"

  export type Bound = {
    top: number,
    id: string,
    active: boolean
  }

  export type SectionBoundContext = {
    bounds: Array<Bound>,
    activeBound: Bound
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
        const bound = context.bounds[i]
        if (bound.top < scrollY && context.bounds[i + 1].top > scrollY) {
          if (bound.id === currentSectionId) {
            return
          }

          context.activeBound.active = false
          context.activeBound = bound
          context.activeBound.active = true

          currentSectionId = bound.id

          cb(currentSectionId)

          return
        }
      }

      const lastBound = context.bounds[context.bounds.length - 1]
      if (currentSectionId !== lastBound.id) {
        context.activeBound.active = false
        context.activeBound = lastBound
        lastBound.active = true

        currentSectionId = lastBound.id
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
  let selectorId = '#' + id

  let context = getSectionBoundContext()

  let contextProps = $state({
    top: 0,
    id: selectorId,
    active: false
  })
  context.bounds.push(contextProps)

  onMount(() => {
    const dividerElBoundY = dividerEl.getBoundingClientRect().top + window.scrollY

    contextProps.top = dividerElBoundY
  })
</script>

<div class="section-divider" class:active={contextProps.active} bind:this={dividerEl}>
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

    opacity: .25;

    transition-property: opacity, color;
    transition-duration: var(--transition-duration);

    @include scr.mobile {
      font-size: 12px;
    }
  }

  .section-divider.active .section-name {
    opacity: .75;
    color: #72ABDC;
  }
</style>