<script>
  import Logo from './Logo.svelte'
</script>

<style>
  header {
    display: grid;
    grid-template-columns: 10vw 1fr;
    margin: 0;
    padding: 0;
    max-height: 8vh;
    overflow: hidden;
    width: 100%;
    margin-top: 2.5vw;
  }
  nav {
    width: 100%;
  }
</style>

<header>
  <Logo />
  <nav>
    <h1>Hey</h1>
    <h1>Ho</h1>
  </nav>
</header>
