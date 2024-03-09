<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import ContactButton from '$lib/components/ContactButton.svelte'
  import Header from '$lib/components/Header.svelte'
  import ShowcaseLink from '$lib/components/ShowcaseLink.svelte'
</script>

<svelte:head>
  <title>Web Design von Ludwig Stecher</title>
  <meta
    name="description"
    content="Lassen Sie sich schnell und unkompliziert eine professionalle, elegante Website designen"
  />
</svelte:head>

<Header />

<ContactButton />

<Block variant="black">
  <h2>Mein Angebot</h2>
  <p>
    Sie brauchen eine Website für Ihr Business? Dann kann ich Ihnen helfen. Ich entwickle mit Ihnen
    zusammen ein individuelles Konzept und kümmere mich um die Umsetzung und Einrichtung. Einfach
    und unkompliziert.
  </p>
</Block>

<Block variant="white">
  <h2>Gestalten Sie eine Marke</h2>
  <p>
    Machen Sie Ihre Website einzigartig und wiedererkennbar. Ich kann Ihnen dabei helfen, eine
    Designsprache samt Logo zu entwerfen.
  </p>
</Block>

<Block variant="blue">
  <h2>Professioneller Look</h2>
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
    <a href="https://www.linkedin.com/in/ludwig-stecher/" target="_blank" rel="noreferrer noopener"
      >LinkedIn</a
    >
    und auf
    <a href="https://github.com/Aloso" target="_blank" rel="noreferrer noopener">GitHub</a>.
  </p>
</Block>

<Block variant="white">
  <h2>Vorgestellte Projekte</h2>

  <ShowcaseLink label="M*Einladung" href="https://www.m-einladung.de" img="meinladung.jpg">
    Eleganter Online-Shop für einen Wochenkalender
  </ShowcaseLink>
  <ShowcaseLink label="Pomsky" href="https://pomsky-lang.org" img="pomsky.png">
    Technische Dokumentation einer Programmiersprache
  </ShowcaseLink>
  <ShowcaseLink
    label="Musikunterricht Holzkirchen"
    href="https://musikunterricht-holzkirchen.de"
    img="mh.jpg"
  >
    Informative Website für eine private Musikschule
  </ShowcaseLink>
  <ShowcaseLink label="Persönlicher Blog" href="https://aloso.github.io" img="blog.png">
    Hier schreibe ich über interessante Technologien
  </ShowcaseLink>
</Block>

<Block variant="black">
  <h2>Kontakt</h2>
  <p>
    Senden Sie mir bitte eine E-Mail an
    <a href="mailto:ludwig.stecher@gmx.de">ludwig.stecher@gmx.de</a>.
  </p>
</Block>
