<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import type { Snippet } from 'svelte'
  import './style.scss'

  interface Props {
    children: Snippet
  }

  let { children }: Props = $props()
</script>

{@render children()}

<Footer />
