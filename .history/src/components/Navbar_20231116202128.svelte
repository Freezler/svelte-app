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

<nav class="fixed bottom-0 z-40 flex h-20 w-full select-none items-center justify-between text-center antialiased focus:select-none md:right-0 md:top-0 md:justify-center">
  <a href="/" class="ml-3 flex h-16 select-none items-center focus:select-none">
	<svg class="flex h-20 animate-pulse md:right-0 md:absolute" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
	  <!-- Outline -->
	  <text class="select-none focus:select-none shadow-xl animate-slow-slide-up md:animate-slow-slide-down" x="0" y="66" font-size="40" fill="red3" stroke="#12ff" stroke-width="2" stroke-linejoin="round">RL</text>
	  <!-- Text -->
	  <text class="animate-slow-slide-in md:animate-slow-slide-in-rtl" x="0" y="65" font-size="40" fill="#87ccd9">RL</text>
	</svg>
  </a>

  <!-- Hamburger voorS mobile/kleine schermen -->
  <button class="mr-8 select-none text-white focus:select-none active:select-none md:hidden" on:click={toggleNav}>
	<div class="relative flex h-6 w-6 items-center">
	  <span class="absolute block h-[2px] w-5 origin-center bg-blueone-50 transition-transform" class:rotate-45={showNav} class:top-2={!showNav}></span>
	  <span class="z-2000 absolute block h-[2px] w-5 origin-center bg-white blur-none transition-transform" class:-rotate-45={showNav} class:bottom-2={!showNav}></span>
	  <span class="z-2000 absolute block h-[2px] w-5 origin-center bg-white blur-none transition-transform" class:-rotate-45={showNav} class:bottom-2={!showNav}></span>
	</div>
  </button>

  <div class={`absolute top-0 z-50 hidden select-none rounded-b-[16px] text-purplethree-50 font-display uppercase items-center justify-center gap-8 py-5 px-5 border-[1px] bg-astral-100 bg-opacity-50 bg-cover bg-center md:flex ${showNav ? 'hidden' : 'block'}`}>
	<a href="/" class="bg-gradient-to-r from-transparent via-hsl(180, 83%, 52%, 0.9) to-transparent bg-no-repeat transition duration-500" style="--d: 0%;">Home</a>
	<a href="/blogs" class="bg-gradient-to-r from-transparent via-hsl(180, 83%, 52%, 0.9) to-transparent bg-no-repeat transition duration-500" style="--d: 0%;">Color Cards</a>
	<a href="/projects" class="bg-gradient-to-r from-transparent via-hsl(180, 83%, 52%, 0.9) to-transparent bg-no-repeat transition duration-500" style="--d: 0%;">Travelslider</a>
	<a href="/about" class="bg-gradient