<script lang="ts">
  export let title: string
  export let description =
    'Lassen Sie sich schnell und unkompliziert eine professionalle, elegante Website designen'
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>
