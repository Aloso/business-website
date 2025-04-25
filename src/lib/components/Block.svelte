<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    variant?: 'white' | 'black' | 'green' | 'blue' | 'orange'
    children: Snippet
  }
  let { variant = 'white', children }: Props = $props()
</script>

<div
  class="block"
  class:dark={variant !== 'white'}
  class:black={variant === 'black'}
  class:green={variant === 'green'}
  class:blue={variant === 'blue'}
  class:orange={variant === 'orange'}
>
  {@render children()}
</div>

<style lang="scss">
  .block {
    padding: 3rem 5rem;

    @media (max-width: 700px) {
      padding: 2rem 3rem;
    }

    @media (max-width: 600px) {
      padding: 2rem;
    }
  }

  .block.dark {
    background: linear-gradient(45deg, #040404, #242424);
    color: white;
    --color-link: #94cbff;

    &.blue {
      background: linear-gradient(45deg, #00565c, #00636b);
    }
    &.orange {
      background: linear-gradient(45deg, #7a3700, #974400);
    }
    &.green {
      background: linear-gradient(45deg, #004200, #006100);
    }
    &.black {
      background: none;
      background-color: #040404;
    }
  }
</style>
