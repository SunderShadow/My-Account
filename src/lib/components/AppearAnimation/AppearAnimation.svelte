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
  let {
    to = 'right',
    delay = 0,
    children
  }: Props = $props()

  let animationComplete = $state(false)
  function onAnimationEnd() {
    animationComplete = true
  }
</script>

<div class="appear-transition {'to_' + to}" class:complete={animationComplete} style:--delay={delay} onanimationend={onAnimationEnd}>
  {@render children()}
</div>

<style lang="scss">
  @keyframes to-left {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes to-right {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes to-top {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes to-bottom {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }


  .appear-transition {
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.37, 0.25, 0.04, 1.02);
    animation-delay: calc(var(--delay, 0) * 300ms);

    &:not(.complete) {
      opacity: 0;
    }

    &.complete {
      display: contents;
    }

    &.to_right {animation-name: to-right}
    &.to_left {animation-name: to-left}
    &.to_top {animation-name: to-top}
    &.to_bottom {animation-name: to-bottom}
  }
</style>