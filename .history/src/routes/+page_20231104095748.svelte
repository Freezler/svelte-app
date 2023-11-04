<script>
	import { onDestroy, onMount } from 'svelte';
	

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>
<style>
	@keyframes fadeAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<main class="-z-10 an">
	<slot />
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-tr from-blueone-300 via-gray-300 to-blueone-900 bg-no-repeat"
	>
			</div>
</main>
