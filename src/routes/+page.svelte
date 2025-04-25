<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import ContactButton from '$lib/components/ContactButton.svelte'
  import EmailLink from '$lib/components/EmailLink.svelte'
  import ExternLink from '$lib/components/ExternLink.svelte'
  import Head from '$lib/components/Head.svelte'
  import Header from '$lib/components/Header.svelte'
  import ShowcaseLink from '$lib/components/ShowcaseLink.svelte'
</script>

<Head
  title="Web Design von Ludwig Stecher"
  description="Lassen Sie sich schnell und unkompliziert eine professionalle, elegante Website designen"
/>

<Header />

<ContactButton />

<Block variant="black">
  <h2>Mein Angebot</h2>
  <p>
    Sie brauchen eine Website für Ihr Business oder Projekt? Dabei helfe ich Ihnen gerne. Ich
    entwickle mit Ihnen zusammen ein individuelles Konzept und kümmere mich um die Umsetzung und
    Einrichtung. Einfach und unkompliziert.
  </p>
  <p>
    Mit meiner jahrelangen Erfahrung im Bereich der Webentwicklung achte ich darauf, dass Ihre
    Website auf dem neuesten Stand der Technik ist und zu Ihren Bedürfnissen passt.
  </p>
</Block>

<Block variant="blue">
  <h2>Gestalten Sie eine Marke</h2>
  <p>
    Machen Sie Ihre Website einzigartig und wiedererkennbar. Ich kann Ihnen dabei helfen, eine
    Designsprache samt Logo zu entwerfen.
  </p>
  <p>
    Der erste Eindruck ist besonders wichtig, und mit modernen Webtechnologien sieht Ihre Website
    auf jedem Gerät großartig aus. Die Designs, die ich entwickle, sind aber nicht nur optisch
    ansprechend, sondern auch funktional.
  </p>
</Block>

<Block variant="white">
  <h2>Barrierearm und benutzerfreundlich</h2>
  <p>
    Barrierearmut bedeutet, dass auch behinderte Menschen die Website benutzen können, z.B. Menschen
    mit einer Sehschwäche. Ein Design, das von Anfang an Barrierearmut berücksichtigt, ist nicht nur
    für Behinderte, sondern für <i>alle</i> Menschen leichter bedienbar.
  </p>
</Block>

<Block variant="orange">
  <h2>Search Engine Optimization</h2>
  <p>
    Eine Website nützt nur etwas, wenn sie auch besucht wird. Dank meiner Erfahrung mit
    Suchmaschinenoptimierung sorge ich dafür, dass die Website in Google möglichst weit oben
    auftaucht.
  </p>
  <p>
    Dazu gehört auch, dass die Website schnell lädt: Googles Algorithmus bestraft langsame Websites
    durch ein schlechteres Ranking. Ein Fokus auf Performance macht die Website also nicht auch
    benutzerfreundlicher, sondern auch erfolgreicher bei Suchmaschinen.
  </p>
</Block>

<Block variant="white">
  <h2>Inhalte einfach verwalten</h2>
  <p>
    Sie müssen den Inhalt der Website regelmäßig anpassen, möchten dafür aber keinen Programmcode
    schreiben? Kein Problem, mit einem modernen Content Management System (CMS) ist es kinderleicht,
    Inhalte hinzuzufügen und zu bearbeiten.
  </p>
</Block>

<Block variant="green">
  <h2>Warum mich?</h2>
  <p>
    Ich habe jahrelange Erfahrung damit, Websites mit verschiedensten Technologien zu erstellen. Ich
    berate Sie gerne und finde für Sie eine Lösung, die zu Ihnen oder Ihrem Unternehmen passt.
  </p>
  <p>
    Ich arbeite hauptberuflich als Softwareentwickler bei der Interhyp. In meiner Freizeit arbeite
    ich an ein paar Open-Source-Projekten. Sie finden mich auf
    <ExternLink href="https://www.linkedin.com/in/ludwig-stecher/">LinkedIn</ExternLink> und auf
    <ExternLink href="https://github.com/Aloso">GitHub</ExternLink>.
  </p>
</Block>

<Block variant="white">
  <h2>Vorgestellte Projekte</h2>

  <ShowcaseLink
    label="Queeres Zentrum Kassel"
    href="https://www.queereszentrumkassel.de"
    img="qzk.png"
  >
    Maßgeschneiderte Verwaltung von Veranstaltungen, verwendet u.a. ein Headless CMS und Edge
    Computing
  </ShowcaseLink>
  <ShowcaseLink label="M*Einladung" href="https://www.m-einladung.de" img="meinladung.jpg">
    Minimalistischer Online-Shop für einen Wochenkalender, verwendet eine Stripe-Integration
  </ShowcaseLink>
  <ShowcaseLink label="Pomsky" href="https://pomsky-lang.org" img="pomsky.png">
    Technische Dokumentation einer Programmiersprache, verwendet Static Site Generation
  </ShowcaseLink>
  <ShowcaseLink
    label="Musikunterricht Holzkirchen"
    href="https://musikunterricht-holzkirchen.de"
    img="mh.jpg"
  >
    Informative Website für eine private Musikschule, verwendet u.a. das Cloudflare CDN.
  </ShowcaseLink>
</Block>

<Block variant="black">
  <h2>Kontakt</h2>
  <p>Senden Sie mir bitte eine E-Mail an <EmailLink />.</p>
</Block>
