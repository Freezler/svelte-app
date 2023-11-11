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
	class="fixed bottom-0 z-40 flex h-20 w-[100%] select-none items-center justify-between bg-transparent text-center antialiased focus:select-none md:right-0 md:top-0 md:justify-center"
>
	<a href="/" class="ml-3 flex h-16 select-none items-center focus:select-none "
		><svg
			class="flex h-20 animate-pulse md:right-0 md:absolute"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			width="100"
			height="100"
			viewBox="0 0 100 100"
		>
			<!-- Outline -->
			<text
				class="select-none focus:select-none shadow-xl animate-slow-slide-down "
				x="0"
				y="66"
				font-size="40"
				fill="red3"
				stroke="#12ff"
				stroke-width="2"
				stroke-linejoin="round">RL</text
			>
			<!-- Text -->
			<text class="animate-slow-slide-out" x="0" y="65" font-size="40" fill="#87ccd9">RL</text>
		</svg></a
	>

	<!-- Hamburger voorS  mobile/kleine schermen -->
	<button
		class=" mr-8 select-none text-white focus:select-none active:select-none md:hidden"
		on:click={toggleNav}
	>
		<div class="relative flex h-6 w-6 items-center">
			<span
				class={' absolute block h-[2px] w-5 origin-center bg-blueone-50 transition-transform'}
				class:rotate-45={showNav}
				class:top-2={!showNav}
			></span>
			<span
				class={'z-2000 absolute block h-[2px] w-5 origin-center bg-white blur-none transition-transform'}
				class:-rotate-45={showNav}
				class:bottom-2={!showNav}
			></span>
			<span
				class={'z-2000 absolute block h-[2px] w-5 origin-center bg-white blur-none transition-transform'}
				class:-rotate-45={showNav}
				class:bottom-2={!showNav}
			></span>
		</div>
	</button>

	<div
		class={`absolute top-0 z-50 hidden select-none rounded-b-2xl text-purplethree-950 font-display uppercase letter-spacing-2 items-center justify-center gap-4 border-2 border-purpleone-900   bg-astral-100 bg-opacity-50 px-4 py-4  md:flex ${
			showNav ? 'hidden' : 'block'
		}`}
	>
	    <a href="/" class="hover:text-cyan-200">Home</a>
		<a href="/blogs" class="hover:text-cyan-200 hover:bg-slate-800 hover:sc">Color Cards</a>
		<a href="/about" class="hover:text-cyan-200">Gallery</a>
		<a href="/links" class="hover:text-cyan-200">Accordeon</a>
	</div>
</nav>

<!-- Conditional Mobile Menu Overlay -->
{#if showNav}
	<div
		class=" fixed inset-0 z-50 flex animate-slow-fade-in select-none items-center justify-center bg-gray-800 bg-opacity-40 backdrop-blur-[2px]"
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
