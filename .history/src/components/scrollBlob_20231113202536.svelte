<script>
  let isActive = true; // Variable to toggle the active state

  function toggleActive() {
	isActive = !isActive;
  }
</script>

<div id="container">
  <div class={`slide ${isActive ? 'active' : ''} bg-gray-200`}>
	<div class="w-64 h-64 bg-gray-500"></div>
	<div class="absolute inset-0 bg-black opacity-75"></div>
	<div class="absolute inset-0 flex items-center justify-center">
	  <div class="text-white text-4xl">Title</div>
	  <div class="w-16 h-16 bg-red-500"></div>
	  <div class="mt-4">
		<ul class="text-white">
		  <li>Info 1</li>
		  <li>Info 2</li>
		  <li>Info 3</li>
		</ul>
	  </div>
	</div>
	<div class="absolute top-0 right-0 w-8 h-8 m-4 cursor-pointer" on:click={toggleActive}>
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
	  </svg>
	</div>
  </div>
</div>