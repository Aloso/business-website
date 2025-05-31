<script lang="ts">
  interface Props {
    button?: boolean
  }

  let { button }: Props = $props()
</script>

<a href="mailto:ludwig.stecher@gmx.de" class:button>
  {button ? 'E-Mail schreiben' : 'ludwig.stecher@gmx.de'}
</a>

<style lang="scss">
  .button {
    display: inline-block;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    background-color: white;
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;

    &:hover,
    &:focus {
      :global(.green) & {
        color: #007b00;
        background-color: white;
      }
      :global(.blue) & {
        color: #007d86;
        background-color: white;
      }
    }
  }
</style>
