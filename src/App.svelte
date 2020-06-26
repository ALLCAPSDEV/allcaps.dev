<script>
  import Header from './components/Header.svelte'
</script>

<style>
  :global(body) {
    background-color: #f2eee2;
    color: #3f3f3f;
    transition: background-color 0.3s;
  }

  @media (prefers-color-scheme: dark) {
    :global(body) {
      background-color: #3f3f3f;
      color: #f2eee2;
    }
  }
  main {
    width: 95%;
    margin: 0 auto;
    height: 99vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }

  .icons {
    grid-row-start: 3;
    justify-self: center;
  }

  .attribute-footer {
    margin-top: 5em;
    font-size: 0.6em;
    align-self: flex-end;
    grid-row-start: 4;
    justify-self: center;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:head>
  <title>ALLCAPS.DEV</title>
</svelte:head>

<main>
  <Header />
</main>
