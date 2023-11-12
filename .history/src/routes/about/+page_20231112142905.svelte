<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Bg
	
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted Campfire page'));
</script>

<main class="flex flex-col  h-screen justify-start items-center   bg-cover">
 <BgImage />
</main>
