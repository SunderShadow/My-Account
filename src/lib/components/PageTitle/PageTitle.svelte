<script lang="ts" module>
  type Props = {
    title: string,
    subtitle: string
  }
</script>

<script lang="ts">
  let {
    title,
    subtitle
  }: Props = $props()
</script>

<div class="title">
  <h1>{title}</h1>
  <div>{subtitle}</div>
</div>

<style lang="scss">
  .title {
    font-size: var(--page-title-font-size, 18px);
    text-align: center;
  }

  h1 {
    font-size: 2em;
    margin: 0;
  }

  div {
    font-size: 1em;
    margin: 12px 0 0;
  }
</style>