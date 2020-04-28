<script>
	import Logo from './logo.svelte';
	if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
		console.log(window.matchMedia('(prefers-color-scheme: dark').matches)
		window.document.body.classList.toggle('dark-mode')
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    window.document.body.classList.toggle('dark-mode')
	});
</script>

<style>
	:global(body) {
		background-color: #f2eee2;
		color: #3f3f3f;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #3f3f3f;
		color: #f2eee2;
	}
	main {
		width: 240px;
		margin: 0 auto;
		height: 99vh;
		display:grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr);
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	h1 {
		color: #2836fc;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		font-family: 'Rubik Mono One', sans-serif;
	}

	.icons {
		grid-row-start: 3;
		justify-self: center;
	}

	.attribute-footer {
		margin-top: 5em;
		font-size: .6em;
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
	<link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap" rel="stylesheet">
</svelte:head>

	<main>
		<Logo />
		<span class="icons"><a href="https://github.com/ALLCAPSDEV"><img src="/icons8-github-50.svg" alt="Github"></a> <a href="https://www.npmjs.com/org/allcapsdev"><img src="/icons8-npm-50.svg" alt="NPMJS"></a></span>
		<span class="attribute-footer"><a target="_blank" href="https://icons8.com/icons/set/github--v1">GitHub</a>, <a target="_blank" href="https://icons8.com/icons/set/npm">NPM</a> and other icons by <a target="_blank" href="https://icons8.com">Icons8</a></span>
	</main>

