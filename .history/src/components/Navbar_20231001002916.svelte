<script>
	import { IconMenu, IconX } from '@tabler/icons-svelte';
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
	class="text-bluetwo-200 fixed bottom-0 abslout flex h-20 w-full select-none items-center justify-between bg-transparent px-6 md:top-0"
>
	<a href="/" class="flex h-20"
		><svg
			class="h-16 animate-fast-fade-in"
			xmlns="http://www.w3.org/2000/svg"
			width="100"
			height="100"
			viewBox="0 0 100 100"
		>
			<!-- Outline -->
			<text
				class="drop-shadow-[0px_0px_13px_hsla(224,100%,59%,0.9)]"
				x="0"
				y="66"
				font-family="Inter"
				font-size="40"
				fill="#3f3"
				stroke="#12ff"
				stroke-width="2"
				stroke-linejoin="round">RV</text
			>
			<!-- Text -->
			<text x="20" y="75" font-family="Inter" font-size="24" fill="#87ccd9">Code</text>
		</svg></a
	>

	<!-- Hamburger voorS  mobile/kleine schermen -->
	<button class="select-none text-white lg:hidden" on:click={toggleNav}>
		<div class="relative flex h-6 w-6 items-center">
			<span
				class={'absolute block h-[2px] w-5 origin-center bg-white transition-transform'}
				class:rotate-45={showNav}
				class:top-2={!showNav}
			></span>
			<span
				class={'absolute block h-[2px] w-5 origin-center bg-white transition-transform'}
				class:-rotate-45={showNav}
				class:bottom-2={!showNav}
			></span>
		</div>
	</button>

	<div
		class={`font-custom mr-8 text-semibold mt-0 hidden select-none items-center justify-center gap-8 font-sans lg:flex ${
			showNav ? 'hidden' : 'block'
		}`}
	>
		<a href="/blogs" class="text-[#dfe2ff]">Color Cards</a>
		<a href="/about" class="text-[#dfe2ff]">About</a>
		<a href="/links" class="mr-4 text-[#dfe2ff]">Links</a>
	</div>
</nav>

<!-- Conditional Mobile Menu Overlay -->
{#if showNav}
	<div
		class=" fixed inset-0 z-50 flex animate-fast-fade-in select-none items-center justify-center bg-gray-800 bg-opacity-75"
		on:click={toggleNav}
		on:keypress={toggleNav}
		role="button"
		tabindex="0"
	>
		<div
			class="flex select-none flex-col items-center text-2xl text-gray-200 opacity-100 transition-opacity duration-300 ease-in-out"
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
				</svg></a
			>
			<a href="/projects" tabindex="0" class="text-[#dfe2ff]">Projects</a>
			<a href="/blogs" tabindex="0" class="text-[#dfe2ff]">Color Cards</a>
			<a href="/about" tabindex="0" class="text-[#dfe2ff]">About</a>
			<a href="/links" tabindex="0" class="text-[#dfe2ff]">Links</a>
		</div>
	</div>
{/if}
