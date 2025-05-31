<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import ExternLink from '$lib/components/ExternLink.svelte'
  import Head from '$lib/components/Head.svelte'
  import SmallHeader from '$lib/components/SmallHeader.svelte'
</script>

<Head
  title="Queeres Zentrum Kassel - Web Design von Ludwig Stecher"
  description="So programmierte ich eine professionelle Website mit Event-Verwaltung"
/>

<SmallHeader />

<Block>
  <div class="card-subheading">Portfolio · Ehrenamt</div>
  <h1>Queeres Zentrum Kassel</h1>

  <p>
    Vergangenes Jahr wurde ich beauftragt, eine Website für das Queere Zentrum in Kassel zu
    gestalten. Als kleiner, gemeinnütziger Verein verfügt das Queere Zentrum nur über begrenzte
    Mittel, weshalb ich den Auftrag ehrenamtlich bearbeitete.
  </p>
  <p>Hier sind die wichtigsten Anforderungen an die Website:</p>
  <ol>
    <li><p>Seiten-Navigation</p></li>
    <li><p>Blog</p></li>
    <li>
      <p>Veranstaltungen</p>
      <ul>
        <li><p>Event-Kalender</p></li>
        <li><p>Einreichen von Veranstaltungen</p></li>
        <li><p>Administration</p></li>
      </ul>
    </li>
    <li><p>Instagram-Einbettung</p></li>
    <li><p>Newsletter-Anmeldung</p></li>
    <li><p>Kontaktformular</p></li>
    <li><p>Suchfunktion</p></li>
    <li><p>Anzeige von Öffnungszeiten</p></li>
  </ol>
  <p>
    Ich entwarf ein paar Designs, und gemeinsam mit dem Queeren Zentrum entschieden wir uns für
    eines. Mehrere Farben sowie ein Logo waren bereits vorgegeben. Damit blieb die Frage, welche
    Technologien wir nutzen wollten.
  </p>
  <p>
    Für die Vereinsleitung des Queeren Zentrums war es wichtig, dass Inhalte einfach bearbeitet
    werden können. Daher entschied ich mich für
    <ExternLink href="https://www.contentful.com/">Contentful</ExternLink>, ein modernes CMS. Die
    Website programmierte ich mit <ExternLink href="https://svelte.dev/">Svelte</ExternLink>, zum
    Deployment nutzte ich
    <ExternLink href="https://workers.cloudflare.com/">Cloudflare Pages</ExternLink>.
  </p>
  <p>
    Für den Newsletter nutzte das Queere Zentrum bereits
    <ExternLink href="https://www.brevo.com/de/">Brevo</ExternLink>. Erfreulicherweise war es
    einfach, ein Anmeldeformular zu erzeugen und an das Design der Website anzupassen. Das
    Kontaktformular war mithilfe von
    <ExternLink href="https://formsubmit.co/">FormSubmit</ExternLink> auch schnell erzeugt.
  </p>
  <p>
    Die Veranstaltungen stellten sich als größeres Hindernis heraus. Wir evaluierten verschiedene
    kostenlose Event-Management-Angebote im Internet, waren jedoch mit keinem zufrieden. Daher
    entwickelte ich selbst eine entsprechende Funktion. Dies ist der wichtigste Teil der Website,
    daher ist die Liste an Veranstaltungen prominent auf der Startseite platziert. Um die
    Veranstaltungen zu verwalten, kam ein Admin-Bereich hinzu. Die Veranstaltungen sind in
    <ExternLink href="https://developers.cloudflare.com/d1/">Cloudflare D1</ExternLink> gespeichert,
    einer relationalen Datenbank für Serverless-Anwendungen.
  </p>
  <p>
    <ExternLink button href="https://queereszentrumkassel.de/">
      Queeres Zentrum Kassel aufrufen
    </ExternLink>
  </p>
</Block>
