<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import ExternLink from '$lib/components/ExternLink.svelte'
  import Head from '$lib/components/Head.svelte'
  import SmallHeader from '$lib/components/SmallHeader.svelte'
</script>

<Head
  title="Pomsky - Web Design von Ludwig Stecher"
  description="So programmierte ich eine technische Dokumentation für eine Computersprache"
/>

<SmallHeader />

<Block>
  <div class="card-subheading">Portfolio · Open-Source</div>
  <h1>Pomsky Dokumentation</h1>

  <p>
    Pomsky ist eine Computersprache für reguläre Ausdrücke, die ich 2022 erfand und seitdem weiter
    entwickle. Dafür schrieb ich außerdem eine Website mit technischer Dokumentation.
  </p>
  <p>Hier sind die wichtigsten Anforderungen an die Website:</p>
  <ol>
    <li><p>Übersichtliche Landing-Page</p></li>
    <li><p>Einfache Bearbeitung der Dokumentation via Markdown</p></li>
    <li><p>Suchfunktion</p></li>
    <li><p>Seiten-Navigation</p></li>
    <li><p>Blog</p></li>
  </ol>
  <p>
    Zuerst veröffentlichte ich die Dokumentation mit
    <ExternLink href="https://github.com/rust-lang/mdBook">mdbook</ExternLink>, doch bald stellte
    sich heraus, dass es zu unflexibel ist. Ich wechselte daher zu
    <ExternLink href="https://gohugo.io/">Hugo</ExternLink> und wählte ein für Dokumentationen geeignetes
    Theme. Hugo bietet viele Möglichkeiten, um das gewählte Theme anzupassen.
  </p>
  <p>
    Das gewählte Theme unterstützte bereits eine Suchfunktion, Seitennavigation und einen Blog.
    Allerdings ersetzte ich die Startseite und überholte das Design. Außerdem schrieb ich ein paar
    Plugins, um fehlende Funktionalität zu ergänzen und Syntax-Hervorhebung für Pomsky zu
    unterstützen.
  </p>
  <p>
    <ExternLink button href="https://pomsky-lang.org/">Pomsky aufrufen</ExternLink>
  </p>
</Block>
