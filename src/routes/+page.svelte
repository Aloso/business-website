<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import EmailLink from '$lib/components/EmailLink.svelte'
  import ExternLink from '$lib/components/ExternLink.svelte'
  import Head from '$lib/components/Head.svelte'
  import Header from '$lib/components/Header.svelte'
</script>

<Head
  title="Web Design von Ludwig Stecher"
  description="Lassen Sie sich schnell und unkompliziert eine professionalle, elegante Website designen"
/>

<Header />

<Block big>
  <div class="summary">
    <div class="region">
      <h2>Innovatives Design</h2>
      <p>
        <em>Innovativ</em> ist ein Design, das nicht nur zur Marke passt, sondern auch benuterfreundlich
        ist und modern und professionell erscheint.
      </p>
    </div>
    <div class="region">
      <h2>Barrierearmut</h2>
      <p>
        Ein Design, das von Anfang an Barrierearmut berücksichtigt, ist nicht nur für Behinderte,
        sondern für alle Menschen <em>leichter bedienbar</em>.
      </p>
    </div>
    <div class="region">
      <h2>Search Engine Optimization</h2>
      <p>
        Eine Website, die schnell lädt und für Suchmaschinen optimiert ist, wird öfter besucht und
        ergibt eine <em>höhere Kundenzufriedenheit</em>.
      </p>
    </div>
    <div class="region">
      <h2>Content Management</h2>
      <p>
        Website-Inhalte können auch ohne technisches Know-How bearbeitet werden. Mit einem Headless
        CMS ist das <em>einfacher denn je</em>.
      </p>
    </div>
  </div>
</Block>

<Block variant="green">
  <div class="contact">
    <div>
      <h2>Kontakt</h2>
      <p>Wenn Sie ein Projekt planen und eine Website brauchen, schreiben Sie mich einfach an.</p>
    </div>
    <EmailLink button />
  </div>
</Block>

<Block big>
  <div class="img border">
    <img src="/screenshots/qzk.jpg" alt="Screenshot der Website vom Queeren Zentrum Kassel" />
  </div>

  <div class="card-subheading">Ehrenamt</div>
  <h2>Queeres Zentrum Kassel</h2>
  <p>
    Vergangenes Jahr wurde ich beauftragt, eine Website für das Queere Zentrum in Kassel zu
    gestalten. Als kleiner, gemeinnütziger Verein verfügt das Queere Zentrum nur über begrenzte
    Mittel, weshalb ich den Auftrag ehrenamtlich bearbeitete.
  </p>
  <a href="/portfolio/queeres-zentrum" class="portfolio-button qzk">Mehr erfahren</a>
  <div class="clear"></div>
</Block>

<Block big variant="gray">
  <div class="img border">
    <img src="/screenshots/meinladung.jpg" alt="Screenshot der Website von M*Einladung" />
  </div>

  <div class="card-subheading">Ehrenamt</div>
  <h2>M*Einladung</h2>
  <p>
    2022 wurde ein Projekt ins Leben gerufen, um einen queeren Wochenkalender zu designen und zu
    verkaufen. Für den Verkauf durfte ich eine personalisierte Website entwickeln.
  </p>
  <a href="/portfolio/meinladung" class="portfolio-button meinladung">Mehr erfahren</a>
  <div class="clear"></div>
</Block>

<Block big>
  <div class="img border">
    <img src="/screenshots/pomsky.png" alt="Screenshot der Pomsky-Dokumentation" />
  </div>

  <div class="card-subheading">Open-Source</div>
  <h2>Pomsky</h2>
  <p>
    Pomsky ist eine Computersprache für reguläre Ausdrücke, die ich 2022 erfand und seitdem weiter
    entwickle. Dafür schrieb ich außerdem eine Website mit technischer Dokumentation.
  </p>
  <a href="/portfolio/pomsky" class="portfolio-button">Mehr erfahren</a>
  <div class="clear"></div>
</Block>

<Block big variant="blue">
  <div class="img smaller">
    <img src="/me.jpg" alt="" />
  </div>

  <h2>Wer ich bin</h2>
  <p>
    Ich habe jahrelange Erfahrung damit, Websites zu programmieren. Ich berate Sie gerne und finde
    für Sie eine Lösung, die zu Ihnen oder Ihrem Unternehmen passt.
  </p>
  <p>
    Hauptberuflich arbeite ich als Softwareentwickler seit 2021. Praktische Erfahrung habe ich aber
    schon deutlich länger: Seit zehn Jahren programmiere ich hobbymäßig und beschäftige mich mit
    verschiedenen Programmiersprachen, Frameworks und Technologien. Sie finden mich unter anderem
    auf <ExternLink href="https://www.linkedin.com/in/ludwig-stecher/">LinkedIn</ExternLink> und auf
    <ExternLink href="https://github.com/Aloso">GitHub</ExternLink>.
  </p>
  <EmailLink button />

  <div class="clear"></div>
</Block>

<style lang="scss">
  .summary {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (min-width: 70rem) {
      grid-template-columns: 1fr 1fr;
    }

    h2 {
      margin: 0 0 1rem 0;
    }

    p {
      margin: 1rem 0 0 0;
    }

    em {
      font-style: normal;
      font-weight: 600;
      color: #6500df;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    > :first-child {
      flex-grow: 1;
    }

    h2 {
      margin: 0 0 1rem 0;
    }

    p {
      margin: 1rem 0 0 0;
    }

    @media (min-width: 50rem) {
      flex-direction: row;
      gap: 3rem;
      align-items: center;
    }
  }

  .img {
    border-radius: 20px;
    position: relative;
    margin-bottom: 2rem;

    img {
      display: block;
      width: 100%;
      border-radius: 20px;
    }

    &.border::after {
      content: '';
      position: absolute;
      box-shadow: inset 0 0 0 2px #0002;
      display: block;
      height: 100%;
      top: 0;
      width: 100%;
      border-radius: 20px;
      pointer-events: none;
    }

    &:not(.smaller) {
      @media (min-width: 1400px) {
        float: right;
        margin-left: 2rem;
        margin-bottom: 0;
        width: 60%;
      }
    }

    &.smaller {
      max-width: 600px;

      @media (min-width: 1000px) {
        float: right;
        margin-left: 2rem;
        width: 400px;
      }

      @media (min-width: 1400px) {
        margin-bottom: 0;
      }
    }
  }

  .portfolio-button {
    display: inline-block;
    text-decoration: none;
    padding: 1rem 1.5rem;
    margin: 1rem 0 0 0;
    color: inherit;
    background-color: #0001;
    border-radius: 12px;
    font-size: 1.1rem;

    &:hover,
    &:focus {
      background-color: #0002;
    }

    &.qzk {
      background-color: #a13dc5;
      color: white;

      &:hover,
      &:focus {
        background-color: #8832a8;
      }
    }

    &.meinladung {
      background-color: #3d3b74;
      color: white;

      &:hover,
      &:focus {
        background-color: #2f2e50;
      }
    }
  }
</style>
