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
	class="fixed select-none flex items-center justify-between w-full h-16 z-10 text-violet-300 bg-transparent"
>
	<a href="/" class="align-self-start ml-4 mt-4 mr-auto select-none"
		><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
			<!-- Outline -->
			<text
				x="10"
				y="65"
				font-family="Inter"
				font-size="40"
				fill="white"
				stroke="#EF7FFF"
				stroke-width="6"
				stroke-linejoin="round">RL</text
			>
			<!-- Text -->
			<text x="10" y="65" font-family="Inter" font-size="40" fill="purple">RL</text>
		</svg></a
	>

	<!-- Hamburger Icon for Small Screens -->
	<button class="lg:hidden mr-6 animate-burgersmooth" on:click={toggleNav}>
		<div
			class={`w-8 h-[2px] bg-[#EF7FFF] my-1 ${
				showNav ? 'transform rotate-43 transition duration-300 ease-in-out translate-y-1' : ''
			}`}
		/>
		<div class={`w-8 h-[2px] bg-[#EF7FFF] my-1 ${showNav ? 'hidden' : ''}`} />
		<div
			class={`w-8 h-[2px] bg-[#EF7FFF] my-1 ${
				showNav ? 'transform -rotate-43 transition duration-300  -translate-y-1' : ''
			}`}
		/>
	</button>

	<div
		class={`font-custom mr-8 hidden gap-8 lg:flex text-semibold font-sans items-center justify-center mt-0 ${
			showNav ? 'hidden' : 'block'
		}`}
	>
		<a href="/projects" class="text-[#EF7FFF]">Projects</a>
		<a href="/blogs" class="text-[#EF7FFF]">Blogs</a>
		<a href="/about" class="text-[#EF7FFF]">About</a>
		<a href="/links" class="mr-8 text-[#EF7FFF]">Links</a>
	</div>
</nav>

<!-- Conditional Mobile Menu Overlay -->
{#if showNav}
	<div
		class="animate-fast-slide-in select-none fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
		on:click={toggleNav}
		on:keypress={toggleNav}
		role="button"
		tabindex="0"
	>
		<div
			class="flex flex-col text-2xl items-center space-y-4 text-gray-200 pacity-0 transition-opacity duration-300 ease-in-out opacity-100"
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
			<a href="/blogs" tabindex="0" class="text-[#EF7FFF]">Blogs</a>
			<a href="/about" tabindex="0" class="text-[#EF7FFF]">About</a>
			<a href="/links" tabindex="0" class="text-[#EF7FFF]">Links</a>
		</div>
	</div>
{/if}
