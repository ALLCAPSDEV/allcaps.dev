<script>
	import Logo from './components/Logo.svelte';
	import Menu from './components/Menu.svelte';
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
			"content";
		justify-items: center;
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
		<img src="../shy.svg" id="shywu" alt="The dev with the Wu-Tang tattoo" />
		<p>Posuere eget de quinque elementa, ut quaeram magis supernae, feminae circum ambulant caelibe perpetitur, livin 'irrelevant, In summa benevolentia rex, communicatin 'per somnia, Mentis imaginibus depictum fuisse, Allah scriptor vidi et audivi, Undique per circuitum tuum atmosphaera, Troposphere, thermosphere, stratosphere, Potest te imaginari unum ex una idea, omnis visus hic, Meum intellectum facit veritatem, quae limpidissima, Tenementis predictis in clausum habitationi innocentes nigrum immigrantes, Illa octoginta quinque percent tenentium suorum animos welfare recipients, Quod suus 'esse videantur campi captivorum Stapleton, Et per noctem ambulo, tertia oculus et lucerna clara in via, Electric microbes, robotic rimatur, Telescope accipere imaginibus of globe, questus tur perforari microchips | RZA - Impossible</p>
		<p>Io ego sum servus viri amplius quam aspera tabernus, Tirones, Im 'fuckin usque Regina militum Et solvas ipsius et stercore, dum allide, A ass mudhole in eo, ex causa me rectum in palude recumbat, Creepin 'in site, nunc autem suus' Fright noctem, Wu-Tang funda mihi arreptitium #bongbong periculi, Mortiferum et plus quam ictu securis, Choppin 'per vestri tergum swish, Givin, cordis impetus adstantes, Flip #bongbong conantur dic quis eum, Et succendam usque in #bongbong 'excipiatur prismate ita, ut agere de ea vitiosus terrorism, Et efficere volo, ut vilis est, et venit super tumultum! | GZA - Bring Da Ruckus</p>
		<p>Quoniam ducti sunt in holocaustum de terra quae perierunt, Ecce equus pallidus semitis, Sequere me: Redditus est Wu-Tang, Quod optimum est quia Starks Clark, et Wallabees, African apes interfectorem blackwatch, In radio, blowin e io, Watts, Ex Hill Park, uada domum in montem, Omne tempus vobis est ambulate per vestri tergum ut gelidus, Lets cortices, qui volunt loqui artes ictus, Spit-sicut semi me ipso et craticulam, Cubito Deturpant, et cubitus locus, Infantem ludere mecum, et infantem cadere, ut butio, Pars convenitur, ad Apocalypsis numerare, Ego autem in #bongbong hott nikks transiet sacerdote pranderent | Method Man - Gravel Pit</p>
		<p>Posuere eget de quinque elementa, ut quaeram magis supernae, feminae circum ambulant caelibe perpetitur, livin 'irrelevant, In summa benevolentia rex, communicatin 'per somnia, Mentis imaginibus depictum fuisse, Allah scriptor vidi et audivi, Undique per circuitum tuum atmosphaera, Troposphere, thermosphere, stratosphere, Potest te imaginari unum ex una idea, omnis visus hic, Meum intellectum facit veritatem, quae limpidissima, Tenementis predictis in clausum habitationi innocentes nigrum immigrantes, Illa octoginta quinque percent tenentium suorum animos welfare recipients, Quod suus 'esse videantur campi captivorum Stapleton, Et per noctem ambulo, tertia oculus et lucerna clara in via, Electric microbes, robotic rimatur, Telescope accipere imaginibus of globe, questus tur perforari microchips | RZA - Impossible</p>
		<p>Io ego sum servus viri amplius quam aspera tabernus, Tirones, Im 'fuckin usque Regina militum Et solvas ipsius et stercore, dum allide, A ass mudhole in eo, ex causa me rectum in palude recumbat, Creepin 'in site, nunc autem suus' Fright noctem, Wu-Tang funda mihi arreptitium #bongbong periculi, Mortiferum et plus quam ictu securis, Choppin 'per vestri tergum swish, Givin, cordis impetus adstantes, Flip #bongbong conantur dic quis eum, Et succendam usque in #bongbong 'excipiatur prismate ita, ut agere de ea vitiosus terrorism, Et efficere volo, ut vilis est, et venit super tumultum! | GZA - Bring Da Ruckus</p>
		<p>Quoniam ducti sunt in holocaustum de terra quae perierunt, Ecce equus pallidus semitis, Sequere me: Redditus est Wu-Tang, Quod optimum est quia Starks Clark, et Wallabees, African apes interfectorem blackwatch, In radio, blowin e io, Watts, Ex Hill Park, uada domum in montem, Omne tempus vobis est ambulate per vestri tergum ut gelidus, Lets cortices, qui volunt loqui artes ictus, Spit-sicut semi me ipso et craticulam, Cubito Deturpant, et cubitus locus, Infantem ludere mecum, et infantem cadere, ut butio, Pars convenitur, ad Apocalypsis numerare, Ego autem in #bongbong hott nikks transiet sacerdote pranderent | Method Man - Gravel Pit</p>
		<p>Scelere crevit in latus lateri New York Times, Stayin 'non est vivere quinque, Quod secondhands Mom est scriptor mensuram palmae senem, Sic igitur ad hoc Shaolin terram, A puer adolescens, rockin io 'cum dente aurea: Ecce anseris aequabis, Tantum modo ut ne gettin 'quod off in G medicamento praedae irrumpunt; Et sic lets 'satus ut haec fili, Jules Revillout 'in hoc et in illo, Pullin 'pro fun de gats, Et factum est sicut somnium teen qui erat propter pe fende Coepi smokin woolas ad XVI, Et in portis faciens cursus' pervenit princeps consolida | Raekwon - C.R.E.A.M.</p>
		<p>Loquens de diaboli, Psych! Nemo, quod est Deus, ut recte stercore, Mega trife: et io, vita praeterita mea in te occisus est, Dum est in vii kickin hoc jejunium stercore, Et reneged conatus iterum, et vento urente percussæ got, Dimidium-style passio dominatur, aut asinum: typho domi negotium ad insaniam convertunt, Quod percussit cum essem in persona Timbs et nigrum, Memento quod assis facis? Scio te non recordabor Jack, Noctem io fui Hittin tanquam rure vespertilionem, Et vos cogitastis de me bugged et amentes, Erat accinctus renes et ineptias post me factus est piger, Io, nemo quemquam fugio dum confodietur slugs | Ghostface Killah - Da Mystery of Chessboxin’</p>
	</section>
	<span class="icons"><a href="https://github.com/ALLCAPSDEV"><img src="/github.svg" alt="Github"></a> <a href="https://www.npmjs.com/org/allcapsdev"><img src="/npm.svg" alt="NPM JS"></a></span>
</main>
