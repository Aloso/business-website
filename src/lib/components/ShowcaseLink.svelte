<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    href: string
    img: string
    label: string
    children: Snippet
  }
  let { href, img, label, children }: Props = $props()
</script>

<a class="showcase" {href} target="_blank" rel="noopener noreferrer">
  <img src="/screenshots/{img}" alt={label} />
  <div class="label">{label}</div>
  <div class="description">{@render children()}</div>
</a>

<style lang="scss">
  a.showcase {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 24rem;
    height: auto;
    vertical-align: top;
    margin: 0 2rem 2rem 0;
    background-color: #eeeeee;
    font-weight: 500;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: inherit;
    transition: 0.2s;
    overflow: hidden;

    @media (max-width: 800px) {
      width: 100%;
    }

    &:hover,
    &:focus {
      background-color: #dddddd;
      text-decoration: none;
    }
  }

  img {
    width: 100%;
    aspect-ratio: 1.55;
    object-fit: cover;
    object-position: center top;
  }

  .label {
    margin: 1rem 2rem;
    color: black;
  }

  .description {
    opacity: 0.6;
    font-size: 85%;
    margin: 1rem 2rem 2rem;
    font-weight: 400;
    color: black;
  }
</style>
