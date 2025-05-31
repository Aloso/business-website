<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import ExternLink from '$lib/components/ExternLink.svelte'
  import Head from '$lib/components/Head.svelte'
  import SmallHeader from '$lib/components/SmallHeader.svelte'
</script>

<Head
  title="M*Einladung - Web Design von Ludwig Stecher"
  description="So programmierte ich eine professionelle Website für den Verkauf eines Kalenders"
/>

<SmallHeader />

<Block>
  <div class="card-subheading">Portfolio · Ehrenamt</div>
  <h1>M*Einladung</h1>

  <p>
    2022 wurde ein Projekt ins Leben gerufen, um einen queeren Wochenkalender zu designen und zu
    verkaufen. Für den Verkauf durfte ich ehrenamtlich eine personalisierte Website entwickeln.
  </p>
  <p>Dies waren die wichtigsten Anforderungen an die Website:</p>
  <ol>
    <li><p>Elegantes Design im Stil des Kalenders</p></li>
    <li><p>Kaufen-Button</p></li>
    <li><p>Seiten-Navigation</p></li>
    <li><p>YouTube-Einbettung</p></li>
    <li><p>Feedback-Funktion</p></li>
  </ol>
  <p>
    Die Programmierung der Website sollte schnell gehen, da die Organisator*innen bald mit dem
    Verkauf der Kalender beginnen wollten. Ich stellte also innerhalb von wenigen Tagen einen
    funktionierenden Prototypen auf die Beine, nach einer Woche war die Website live.
  </p>
  <p>
    Möglich machte dies <ExternLink href="https://pages.github.com/">GitHub Pages</ExternLink>, was
    das Iterieren sehr vereinfachte, sowie
    <ExternLink href="https://stripe.com/de">Stripe</ExternLink> als Zahlungsdienstleister. Für die Feedback-Funktion
    verwendete ich <ExternLink href="https://disqus.com/">Disqus</ExternLink>.
  </p>
  <p>
    Um die Website schnell fertig zu stellen, ging ich einen Kompromiss ein: Statt eines
    professionellen Frontend-Frameworks wie Svelte oder React verwendete ich lediglich
    <ExternLink href="https://handlebarsjs.com/">Handlebars</ExternLink> snippets. Die Website ist also
    weitestgehend in reinem HTML und JavaScript geschrieben. Mit Static Site Generation und
    <ExternLink href="https://vite.dev/">Vite.js</ExternLink> als Bundler ist die Website dafür sehr
    performant.
  </p>
  <p>
    <ExternLink button href="https://www.m-einladung.de/">M*Einladung aufrufen</ExternLink>
  </p>
</Block>
