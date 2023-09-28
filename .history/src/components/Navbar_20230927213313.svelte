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
  
  <!-- ... rest of the code ... -->
  
  <!-- Hamburger Icon for Small Screens -->
  <button class="lg:hidden mr-7 animate-burger-smooth" on:click={toggleNav}>
	<div class="w-7 h-1 bg-[#EF7FFF] transition-all duration-300 transform origin-center ${
	  showNav ? 'rotate-45 translate-y-2' : ''
	}"></div>
	<div class="w-7 h-1 bg-[#EF7FFF] transition-opacity duration-300 ${
	  showNav ? 'opacity-0' : ''
	}"></div>
	<div class="w-7 h-1 bg-[#EF7FFF] transition-all duration-300 transform origin-center ${
	  showNav ? '-rotate-45 -translate-y-2' : ''
	}"></div>
  </button>
  
  <!-- ... rest of the code ... -->
  