<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    big?: boolean
    variant?: 'white' | 'black' | 'green' | 'blue' | 'orange' | 'gray'
    children: Snippet
  }
  let { big, variant = 'white', children }: Props = $props()
</script>

<div
  class="block"
  class:big
  class:dark={variant !== 'white' && variant !== 'gray'}
  class:black={variant === 'black'}
  class:green={variant === 'green'}
  class:blue={variant === 'blue'}
  class:orange={variant === 'orange'}
  class:gray={variant === 'gray'}
>
  <div class="block-inner">
    {@render children()}
  </div>
</div>

<style lang="scss">
  .block {
    padding: 3rem 5rem;

    &.big {
      padding-top: 5rem;
      padding-bottom: 5rem;

      :global(h2) {
        margin-top: 0;
      }

      :global(p:last-child) {
        margin-bottom: 0;
      }
    }

    @media (max-width: 700px) {
      padding: 2rem 3rem;
    }

    @media (max-width: 600px) {
      padding: 2rem;
    }
  }

  .block-inner {
    max-width: 1600px;
    margin: 0 auto;
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

  .block {
    &.gray {
      background: #eee;
    }
  }
</style>
