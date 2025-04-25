<script lang="ts">
  interface Props {
    title: string
    description?: string
  }

  let {
    title,
    description = 'Lassen Sie sich schnell und unkompliziert eine professionalle, elegante Website designen',
  }: Props = $props()
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>
