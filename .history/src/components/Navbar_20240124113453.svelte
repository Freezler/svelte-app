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
	class="fixed bottom-0 rigth-0 left-0 z-10 flex w-[100%] select-none items-center justify-around text-center antialiased md:bottom-2 md:right-0 md:top-0 md:justify-center md:absolute"
>
	<svg
		class="animate-pulse  box-border"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		width="100"
		height="100"
		viewBox="0 0 100 100"
	>
		<!-- Outline -->
		<text
			class="animate-slow-slide-up select-none shadow-2xl focus:select-none md:animate-slow-slide-down"
			x="0"
			y="66"
			font-size="40"
			fill="red3"
			stroke="oklch(57.77% 0.271 327.71 / 80.3%)"
			stroke-width="2"
			stroke-linejoin="round">RV</text
		>
		<!-- Text -->
		<text
			class="animate-slow-slide-in md:animate-slow-slide-in-rtl"
			x="0"
			y="65"
			font-size="40"
			fill="oklch(157.77% 0.271 327.71 / 80.3%)">RV</text
		>
	</svg>

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
				class={'absolute z-20 block h-[2px] w-5 origin-center bg-white blur-none transition-transform'}
				class:-rotate-45={showNav}
				class:bottom-2={!showNav}
			></span>
			<span
				class={'absolute z-20 block h-[2px] w-5 origin-center bg-white blur-none transition-transform'}
				class:-rotate-45={showNav}
				class:bottom-2={!showNav}
			></span>
		</div>
	</button>

	<div
		class={`absolute top-0 z-50	hidden select-none flex-row  items-center  rounded justify-center gap-8 bg-astral-950/70 bg-cover bg-center px-8 py-3 font-display text-xl  uppercase text-blueone-50 md:flex ${
			showNav ? 'hidden' : 'block'
		}`}
	>
		<a href="/" class="fading-1">Home</a>
		<a href="/blogs" class="fading-1">Color Cards</a>
		<a href="/projects" class="fading-1">Travelslider</a>
		<a href="/about" class="fading-1">Gallery</a>
		<a href="/links" class="fading-1">Accordeon</a>
	</div>
</nav>

<!-- Conditional Mobile Menu Overlay -->
{#if showNav}
	<div
		class=" duration-900 fixed -inset-1 z-50 flex animate-fast-fade-in select-none items-center justify-center bg-astral-950/40 backdrop-blur-[16px] transition-all ease-in-out"
		on:click={toggleNav}
		on:keypress={toggleNav}
		role="button"
		tabindex="0"
	>
		<div
			class="absulute letter-spacing-1 flex select-none flex-col items-center justify-between pb-4 text-2xl text-blueone-200 opacity-100 transition-all duration-100 ease-in-out"
		>
			<a href="/" tabindex="0" class="font-[800] text-cyan-800">
				<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
					<!-- Outline -->
					<text
						x="16"
						y="50"
						font-family="Montserrat"
						font-size="40"
						fill=""
						stroke="hsla(245, 80%, 75%, 0.9)"
						stroke-width="3"
						stroke-linejoin="round">RL</text
					>
					<!-- Text -->
					<text x="16" y="50" font-family="Lexend" font-size="40" fill="white">RL</text>
				</svg>
				<hr class="fading-1 mb-8 w-full" /></a
			>
			<a Travel href="/projects" tabindex="0" class="text-[hsla(215,80%,65%,0.9] fading-1"
				>Travel slider..</a
			>
			<a href="/blogs" tabindex="0" class="fading-1 text-[#dfe2ff]">Color Cards</a>
			<a href="/about" tabindex="0" class="fading-1 text-[#dfe2ff]">Gallery</a>
			<a href="/links" tabindex="0" class="fading-1 text-[#dfe2ff]">Accordeon</a>
		</div>
	</div>
{/if}

<style>
	.fading-1 {
		background: linear-gradient(
				45deg,
				hsla(0, 1%, 13%, 0.1),
				hsla(225, 17%, 91%, 0.9),
				transparent
			)
			bottom / var(--d, 0) 1.5px no-repeat;
		transition: 0.6s;
	}
	.fading-1:hover {
		--d: 100%;
	}
</style>
