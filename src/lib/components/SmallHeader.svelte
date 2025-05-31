<header>
  <h1>
    <a href="/">
      <div class="fancy-word">Web Design</div>
      <div class="header-sub">von Ludwig Stecher</div>
    </a>
  </h1>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    padding: 2rem;
    background-color: #e2ffd6;
    z-index: 2;

    h1 {
      margin: 0;
      text-align: center;

      a {
        text-decoration: none;
        color: inherit;

        &:hover,
        &:focus {
          text-decoration: underline 2px;
        }
      }
    }

    .fancy-word {
      font-size: calc(1rem + 1.2vw);
      font-weight: 300;
      line-height: 1;
      color: #ce0037;
    }
    .header-sub {
      font-size: calc(0.8rem + 0.4vw);
      font-weight: 500;
      line-height: 1;
      margin-top: 0.5rem;
    }
  }
</style>
