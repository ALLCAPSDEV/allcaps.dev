<script>
</script>

<style>
	:global(body) {
		background-color: #3f3f3f;
		color: #3f3f3f;
		transition: background-color 0.3s;
		padding: .5em;
	}
	main {
		width: 100%;
		height: 100%;
		display:grid;
		background-color: #f2eee2;
		grid-template-columns: repeat(6,1fr);
		grid-template-rows: 6em repeat(3, 1fr);
		grid-template-areas: 
			"logo menu menu menu menu menu"
			"logo content content content content content"
			"x content content content content content"
			"social content content content content content";
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.icons {
		grid-row-start: 3;
		justify-self: center;
		align-self: flex-end;
		grid-area: social;
		margin-bottom: .5em;
	}

	.icons img {
		width: 40px;
	}

	#logo {
		margin: 1.5em;
		transform: rotate(-10deg);
		grid-area: logo;
		align-self: flex-start;
	}

	#content {
		grid-area: content;
		align-self: flex-start;
		margin: .5em;
	}

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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: #f2eee2;
			color: #f2eee2;
		}

		main {
			background-color: #3f3f3f;
		}
	}
</style>

<svelte:head>
	<title>ALLCAPS.DEV</title>
</svelte:head>

<main>
	<img src="./logo.svg" id="logo" alt="ALLCAPS.DEV" />
	<section id="content">
		<h1>HOO-HAH!</h1>
	</section>
	<nav id="menu">
		<h1>This is where the menu will be</h1>
	</nav>
	<span class="icons"><a href="https://github.com/ALLCAPSDEV"><img src="/github.svg" alt="Github"></a> <a href="https://www.npmjs.com/org/allcapsdev"><img src="/npm.svg" alt="NPM JS"></a></span>
</main>
