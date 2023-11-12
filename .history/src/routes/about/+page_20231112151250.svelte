<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	
	
	onMount(() => console.log('Mounted about page'));
	onDestroy(() => console.log('Unmounted about page'));
</script>

<main class="flex flex-col h-screen justify-center items-center bg-cover">
 <BgImage />

</main>
