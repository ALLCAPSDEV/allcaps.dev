<script>
	import Logo from './components/Logo.svelte';
	import Menu from './components/Menu.svelte';
	import NPM from './components/Npm.svelte';
	import Github from './components/Github.svelte';
	const menuItems = [
		{
			title: "Home",
			url: "/"
		},
		{
			title: "About",
			url: "/about"
		},
		{
			title: "Projects",
			url: "/projects"
		},
		{
			title: "Blog",
			url: "/blog"
		},
		{
			title: "Contact",
			url: "/contact"
		}
	]
</script>

<style>
	:global(body) {
		background-color: #3f3f3f;
		color: #3f3f3f;
		transition: background-color 0.3s;
		padding: .5em;
		height: 100%;
		font-size: calc(16px + (24 - 1) * ((100vw - 400px) / (800 - 400)));
	}

	main {
		width: 100%;
		display: grid;
		grid-template-areas:	
			"logo"
			"menu"
			"content"
			"social";
		justify-items: center;
	}

	.icons {
		justify-self: center;
		grid-area: social;
		margin-bottom: .5em;
		width: 100%;
	}

	.icons img {
		width: 1rem;
	}

	@media (min-width: 640px) {
		main {
			width: 100%;
			min-height: 100%;
			display:grid;
			background-color: #f2eee2;
			grid-template-columns: repeat(6,1fr);
			grid-template-rows: repeat(4, 1fr);
			grid-template-areas: 
				"logo menu menu menu menu menu"
				"logo content content content content content"
				". content content content content content"
				"social content content content content content";
			justify-content: center;
			align-content: center;
			align-items: center;
			position: relative;
			z-index: 1;
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

		#content {
			grid-area: content;
			align-self: flex-start;
			margin: .5em;
		}
		#shywu {
			width: 18vw;
			shape-outside: url('../shy.svg');
			shape-margin: .6em;
			float: right;
			opacity: .4;

		}

		p {
			text-align: justify;
		}

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
	<Logo />
	<Menu items={menuItems} />
	<section id="content">
	</section>
	<span class="icons"><a href="https://github.com/ALLCAPSDEV"><Github /></a> <a href="https://www.npmjs.com/org/allcapsdev"><NPM /></a></span>
</main>
