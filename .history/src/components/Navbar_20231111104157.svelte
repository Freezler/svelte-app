<script>
	
	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const [send, receive] = crossfade({
		duration: 100,
		easing: quintOut
	});

	let showNav = false;

	const toggleNav = () => {
		showNav = !showNav;
		const body = document.body;

		if (showNav) {
			body.classList.add('overflow-hidden');
		} else {
			body.classList.remove('overflow-hidden');
		}
	};
</script>

<nav
	class=" m-0 p-0 min-w-[100%] fixed bottom-0 z-40 flex h-20 w-full select-none items-center justify-center bg-transparent px-0 focus:select-none md:top-0"
>
	<a href="/" class="ml-3 flex h-16 select-none justify-end  focus:select-none"
		><svg
			class="flex h-20 animate-pulse md:bg-red-200 md:w-screen md:float-left"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			width="100"
			height="100"
			viewBox="0 0 100 100"
		>
			<!-- Outline -->
			<text
				class="select-none drop-shadow-[0px_0px_13px_hsla(234,100%,59%,0.9)] focus:select-none"
				x="0"
				y="66"
				font-family="Inter"
				font-size="40"
				fill="#3f3"
				stroke="#12ff"
				stroke-width="2"
				stroke-linejoin="round">RL</text
			>
			<!-- Text -->
			<text x="0" y="65" font-family="Inter" font-size="40" fill="#87ccd9">RL</text>
		</svg></a
	>

	<!-- Hamburger voorS  mobile/kleine schermen -->
	<button
		class="mr-8 select-none text-white focus:select-none active:select-none md:lg:hidden"
		on:click={toggleNav}
	>
		<div class="relative flex h-6 w-6 items-center">
			<span
				class={'absolute block h-[2px] w-5 origin-center bg-blueone-50 transition-transform'}
				class:rotate-45={showNav}
				class:top-2={!showNav}
			></span>
			<span
				class={'absolute block h-[2px] w-5 origin-center bg-white transition-transform'}
				class:-rotate-45={showNav}
				class:bottom-2={!showNav}
			></span>
			<span
				class={'absolute block h-[2px] w-5 origin-center bg-white transition-transform'}
				class:-rotate-45={showNav}
				class:bottom-2={!showNav}
			></span>
		</div>
	</button>

	<div
		class={`font-custom text-semibold mr-8 mt-0 hidden select-none items-center justify-center gap-4 font-sans lg:flex ${
			showNav ? 'hidden' : 'block'
		}`}
	>
		<a href="/blogs" class="text-[#dfe2ff]">Color Cards</a>
		<a href="/about" class="text-[#dfe2ff]">Gallery</a>
		<a href="/links" class="mr-4 text-[#dfe2ff]">Accordeon</a>
	</div>
</nav>

<!-- Conditional Mobile Menu Overlay -->
{#if showNav}
	<div
		class=" fixed inset-0 z-50 flex animate-fast-fade-in select-none items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-[4px]"
		on:click={toggleNav}
		on:keypress={toggleNav}
		role="button"
		tabindex="0"
	>
		<div
			class="absulute flex select-none flex-col items-center text-2xl text-gray-200 opacity-100 transition-opacity duration-100 ease-in-out"
		>
			<a href="/" tabindex="0" class="text-cyan-200"
				><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
					<!-- Outline -->
					<text
						x="16"
						y="50"
						font-family="Inter"
						font-size="40"
						fill="cyan"
						stroke="#dfe2ff"
						stroke-width="6"
						stroke-linejoin="round">RL</text
					>
					<!-- Text -->
					<text x="16" y="50" font-family="Inter" font-size="40" fill="indigo">RL</text>
				</svg>
				<hr class="mb-6 w-full border-bluetwo-400" /></a
			>
			<a href="/projects" tabindex="0" class="text-[#b910377e]">under construction..</a>
			<a href="/blogs" tabindex="0" class="text-[#dfe2ff]">Color Cards</a>
			<a href="/about" tabindex="0" class="text-[#dfe2ff]">Gallery</a>
			<a href="/links" tabindex="0" class="text-[#dfe2ff]">Accordeon</a>
		</div>
	</div>
{/if}
