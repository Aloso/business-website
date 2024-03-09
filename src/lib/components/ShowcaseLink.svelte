<script lang="ts">
  export let href: string
  export let img: string
  export let label: string
</script>

<a {href} target="_blank" rel="noopener noreferrer">
  <img src="/screenshots/{img}" alt={label} />
  <div class="label">{label}</div>
  <div class="description"><slot /></div>
</a>

<style lang="scss">
  a {
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
  }

  a:hover,
  a:focus {
    background-color: #dddddd;
    text-decoration: none;
  }

  a img {
    width: 100%;
    aspect-ratio: 1.55;
    object-fit: cover;
    object-position: center top;
  }

  a .label {
    margin: 1rem 2rem;
  }

  a .description {
    opacity: 0.6;
    font-size: 85%;
    margin: 1rem 2rem 2rem;
    font-weight: 400;
  }
</style>
