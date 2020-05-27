<style>
  #menu {
    width: 100%;
		border-top: .2rem solid #f2eee2;
		border-bottom: .2rem solid #f2eee2;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    padding-top: .5rem;
    padding-bottom: .5rem;
  }

  #menu > a {
    font-size: 1.2rem;
    color: #f2eee2;
  }

  @media (min-width: 640px) {
    #menu {
			grid-area: menu;
			justify-self: right;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			position: relative;
			padding-right: 1em;
		}

		#menu::before {
			content: "";
			top: 100%;
			left: -2em;
			height: 1em;
			width: 2em;
			background: rebeccapurple;
			position: absolute;
		}
		#menu::after {
			content: "";
			background: goldenrod;
			top: 100%;
			height: 1em;
			width: 100%;
			left: 0;
			position: absolute;
		}
  }
</style>

<script>
  export let items = [
    { title: "Home", url: "/"}
  ]
</script>

<nav id="menu">
	{#each items as {title, url}}
    <a href={url}>
      <strong>{title}</strong>
    </a>
  {/each}
</nav>