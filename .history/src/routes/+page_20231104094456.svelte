<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10 traa">
	<slot />
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-tr from-blueone-300 via-gray-300 to-blueone-900 bg-no-repeat"
	>
			</div>
</main>
