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
	class="text-classic_blue_pallete-primary fixed bottom-0 z-10 flex h-12 w-full select-none items-center justify-between bg-transparent md:top-0"
>
	<div class="flex">
		<a href="/" class=" mb-[1.9rem] ml-[0.8rem] select-none"
			><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
				<!-- Outline -->
				<text
					x="10"
					y="65"
					font-family="Inter"
					font-size="40"
					fill="#3f3"
					stroke="#dfe2ff"
					stroke-width="4"
					stroke-linejoin="round">RL</text
				>
				<!-- Text -->
				<text x="10" y="65" font-family="Inter" font-size="40" fill="#638cce">RL</text>
			</svg></a
		>
	</div>

	<!-- Hamburger voorS  mobile/kleine schermen -->
	<button
		class="animate-burgersmooth mb-[1rem] mr-[1.6rem] select-none text-white lg:hidden"
		on:click={toggleNav}
	>
		<div class="flex flex-col gap-2">
			<span class={'block h-[2px] w-5 bg-white'} class={showNav ? 'rotate-45' : 'rotate-0'}></span>
			<span class={'block h-[2px] w-5 bg-white'}></span>
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
