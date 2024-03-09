<footer>
  &copy; 2024 Ludwig Stecher
  <div class="footer-space"></div>

  <a href="https://github.com/Aloso">GitHub</a>
  <div class="footer-space small"></div>
  <a href="https://www.linkedin.com/in/ludwig-stecher-4742721b3/">LinkedIn</a>
  <div class="footer-space small"></div>
  <a href="https://aloso.github.io">Blog</a>
  <div class="footer-space small"></div>
  <a href="/impressum">Impressum</a>
  <div class="footer-space small"></div>
  <a href="/datenschutz">Datenschutz</a>
</footer>

<style lang="scss">
  footer {
    padding: 3rem 5rem;
    background: none;
    color: white;
    background-color: #202020;

    :global(a) {
      text-decoration: none;
      color: #6fb9ff;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 0.33rem;
        text-decoration-thickness: 1.2px;
      }
    }

    @media (max-width: 700px) {
      padding: 2rem 3rem;
    }

    @media (max-width: 600px) {
      padding: 2rem;
    }
  }

  .footer-space {
    height: 1rem;
  }
  .footer-space.small {
    display: inline-block;
    width: 1.7rem;

    @media (max-width: 600px) {
      display: block;
      height: 1rem;
    }
  }
</style>
