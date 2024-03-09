<a id="sticky-button" href="mailto:ludwig.stecher@gmx.de">Kontakt</a>

<style lang="scss">
  #sticky-button {
    position: fixed;
    z-index: 1;
    display: inline-block;
    bottom: calc(10px + 1vw);
    right: calc(10px + 1vw);
    width: auto;
    box-sizing: border-box;
    font-size: calc(22px + 0.2vw);
    padding: calc(15px + 0.2vw) calc(25px + 0.3vw);
    border-radius: calc(8px + 0.2vw);
    background-color: #37ebff;
    color: black;
    text-decoration: none;
    box-shadow: 0 0 0 4px #fff5;
    transition: 0.2s;

    &:hover {
      background-color: #1fc7da;
      box-shadow: 0 0 0 4px #fff3;
    }
  }
</style>
