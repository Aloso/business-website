<header>
  <div class="g1"></div>
  <div class="g2">
    <img src="/screenshots/meinladung.jpg" alt="M*Einladung" />
  </div>
  <div class="g3"></div>
  <div class="g4">
    <img src="/screenshots/pomsky.png" alt="Pomsky" />
  </div>
  <div class="g5" id="center-area">
    <h1>
      <div class="fancy-word">Web Design</div>
      <div class="header-sub">von Ludwig Stecher</div>
    </h1>
  </div>
  <div class="g6">
    <img src="/screenshots/blog.png" alt="Blog" />
  </div>
  <div class="g7"></div>
  <div class="g8">
    <img src="/screenshots/mh.jpg" alt="Musikunterricht Holzkirchen" />
  </div>
  <div class="g9"></div>
</header>

<style lang="scss">
  header {
    display: grid;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100svh;
    background-color: white;
    z-index: 2;
    grid-template:
      [row1-start] 'g1 g2 g3' 1fr [row1-end]
      [row2-start] 'g4 g5 g6' 1fr [row2-end]
      [row3-start] 'g7 g8 g9' 1fr [row3-end]
      / 1fr 1fr 1fr;
  }

  .g1 {
    grid-area: g1;
  }
  .g2 {
    grid-area: g2;
  }
  .g3 {
    grid-area: g3;
  }
  .g4 {
    grid-area: g4;
  }
  .g5 {
    grid-area: g5;
  }
  .g6 {
    grid-area: g6;
  }
  .g7 {
    grid-area: g7;
  }
  .g8 {
    grid-area: g8;
  }
  .g9 {
    grid-area: g9;
  }

  header > div {
    position: relative;
    border: 1px solid #999;
    border-width: 0 1px 1px 0;
  }

  header > div > img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    opacity: 0.4;
    transition: 0.66s;
  }

  header > div > img:hover {
    opacity: 1;
  }

  .g3,
  .g6,
  .g9 {
    border-right-width: 0;
  }

  .g7,
  .g8,
  .g9 {
    border-bottom-width: 0;
  }

  #center-area {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header h1 {
    margin: 0;
    text-align: center;
  }

  header .fancy-word {
    font-size: calc(1.2rem + 2.6vw);
    font-weight: 300;
    line-height: 1;
    color: #ce0037;
  }
  header .header-sub {
    font-size: calc(0.6rem + 1.3vw);
    font-weight: 500;
    line-height: 1;
    margin-top: 1rem;
  }

  @media (max-width: 125vh) {
    header {
      grid-template:
        [row1-start] 'g2 g4' 32vw [row1-end]
        [row2-start] 'g5 g5' 1fr [row2-end]
        [row3-start] 'g6 g8' 32vw [row3-end]
        / 1fr 1fr;
    }

    #center-area {
      display: flex;
      padding: 0 calc(12vw - 20px);
    }

    .g1,
    .g3,
    .g7,
    .g9 {
      display: none;
    }
  }

  @media (orientation: portrait) {
    header .fancy-word {
      font-size: calc(2rem + 5.4vw);
    }
    header .header-sub {
      font-size: calc(1rem + 2.7vw);
    }

    header {
      grid-template:
        [row1-start] 'g2 g4' 32vw [row1-end]
        [row2-start] 'g5 g5' 1fr [row2-end]
        [row3-start] 'g6 g8' 32vw [row3-end]
        / 1fr 1fr;
    }

    #center-area {
      display: flex;
      padding: 0 calc(12vw - 20px);
    }

    .g1,
    .g3,
    .g7,
    .g9 {
      display: none;
    }
  }
</style>
