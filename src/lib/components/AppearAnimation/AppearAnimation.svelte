<script lang="ts" module>
  import type {Snippet} from "svelte"

  export type Props = {
    // to right by default
    to?: 'right' | 'left' | 'bottom' | 'top',
    // delay * 300ms
    delay?: number,
    children: Snippet
  }
</script>

<script lang="ts">
  import {onMount} from "svelte"

  let {
    to = 'right',
    delay = 0,
    children
  }: Props = $props()

  let animationComplete = $state(false)
  function onAnimationEnd() {
    animationComplete = true
  }

  let inWindowBounds = $state(false)
  // @ts-ignore
  let el: HTMLDivElement = $state()

  onMount(() => {
    function listener() {
      const rect = el.getBoundingClientRect()
      console.log(el, {
        top: rect.top,
        bottom: rect.bottom
      })
      inWindowBounds = rect.top > 0 && rect.top < window.innerHeight || rect.bottom > 0 && rect.bottom < window.innerHeight
      if (inWindowBounds) {
        window.removeEventListener('scroll', listener)
      }
    }

    window.addEventListener('scroll', listener)
    listener()
  })
</script>

<div bind:this={el}
     class:ready={inWindowBounds}
     class="appear-transition {'to_' + to}"
     class:complete={animationComplete}
     style:--delay={delay}
     onanimationend={onAnimationEnd}
>
  {@render children()}
</div>

<style lang="scss">
  @keyframes to-left {
    0% {
      transform: translateX(50%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes to-right {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes to-top {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes to-bottom {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .appear-transition {
    opacity: 0;
  }

  .appear-transition.ready {
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.37, 0.25, 0.04, 1.02);
    animation-delay: calc(var(--delay, 0) * 300ms + 200ms);

    &.complete {
      display: contents;
    }

    &.to_right {animation-name: to-right}
    &.to_left {animation-name: to-left}
    &.to_top {animation-name: to-top}
    &.to_bottom {animation-name: to-bottom}
  }
</style>