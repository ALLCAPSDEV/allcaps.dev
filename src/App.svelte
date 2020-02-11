<script>
</script>

<style>
	main {
		max-width: 240px;
		height: 100%;
		margin: 0 auto;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		color: #2836fc;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		font-family: 'Rubik Mono One', sans-serif;
	}

	.attribute-footer {
		margin-top: 5em;
		font-size: .6em;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<svelte:head>
	<title>ALLCAPS.DEV</title>
	<link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<h1>ALLCAPS.DEV</h1>
	<span class="icons"><a href="https://github.com/ALLCAPSDEV"><img src="/icons8-github-50.svg" alt="Github"></a> <a href="https://www.npmjs.com/org/allcapsdev"><img src="/icons8-npm-50.svg" alt="NPMJS"></a></span>
	<span class="attribute-footer"><a target="_blank" href="https://icons8.com/icons/set/github--v1">GitHub</a>, <a target="_blank" href="https://icons8.com/icons/set/npm">NPM</a> and other icons by <a target="_blank" href="https://icons8.com">Icons8</a></span>
</main>
