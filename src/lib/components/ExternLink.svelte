<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    button?: boolean
    href: string
    children: Snippet
  }
  let { button, href, children }: Props = $props()
</script>

<a class:button {href} target="_blank" rel="noreferrer noopener">{@render children()}</a>
