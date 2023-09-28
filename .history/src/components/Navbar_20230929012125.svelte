<script>
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
	class="fixed select-none flex items-center justify-between w-full h-16 z-10 text-classic_blue_pallete-primary bg-transparent"
>
	<a href="/" class="align-self-start select-none ml-4 mt-4"
		><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
			<!-- Outline -->
			<text
				x="10"
				y="65"
				font-family="Inter"
				font-size="40"
				fill="#3f3"
				stroke="#dfe2ff"
				stroke-width="6"
				stroke-linejoin="round">RL</text
			>
			<!-- Text -->
			<text x="10" y="65" font-family="Inter" font-size="40" fill="#dfe2ff">RL</text>
		</svg></a
	>

	<!-- Hamburger voorS  mobile/kleine schermen -->
	<button class="lg:hidden mr-6 mt-4 animate-burgersmooth" on:click={toggleNav}>
		<div
			class={`w-9 h-1 bg-[#EF7FFF] my-2 ${
				showNav
					? 'transform rotate-45 transition duration-300 ease-in-out translate-y-2'
					: ''
			}`}
		/>
		<div class={`w-9 h-1 bg-[#EF7FFF] my-2 ${showNav ? 'hidden' : ''}`} />
		<div
			class={`w-9 h-1 bg-[#EF7FFF] my-2 ${
				showNav ? 'transform -rotate-45 transition duration-300  -translate-y-1' : ''
			}`}
		/>
	</button>

	<div
		class={`font-custom mr-8 hidden gap-8 lg:flex text-semibold font-sans items-center justify-center mt-0 ${
			showNav ? 'hidden' : 'block'
		}`}
	>
		<a href="/blogs" class="text-[#EF7FFF]">Color Cards</a>
		<a href="/about" class="text-[#EF7FFF]">About</a>
		<a href="/links" class="mr-8 text-[#EF7FFF]">Links</a>
	</div>
</nav>

<!-- Conditional Mobile Menu Overlay -->
{#if showNav}
	<div
		class="animate-slow-fade-in select-none fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
		on:click={toggleNav}
		on:keypress={toggleNav}
		role="button"
		tabindex="0"
	>
		<div
			class="flex flex-col text-2xl items-center text-gray-200 transition-opacity duration-300 ease-in-out opacity-100"
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
						stroke="#EF7FFF"
						stroke-width="6"
						stroke-linejoin="round">RL</text
					>
					<!-- Text -->
					<text x="16" y="50" font-family="Inter" font-size="40" fill="indigo">RL</text>
				</svg></a
			>
			<a href="/projects" tabindex="0" class="text-[#EF7FFF]">Projects</a>
			<a href="/blogs" tabindex="0" class="text-[#EF7FFF]">Color Cards</a>
			<a href="/about" tabindex="0" class="text-[#EF7FFF]">About</a>
			<a href="/links" tabindex="0" class="text-[#EF7FFF]">Links</a>
		</div>
	</div>
{/if}
