<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import BgImage from '../../components/Bg-Image.svelte';
	
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted Campfire page'));
</script>

<main class="flex flex-col  h-screen justify-start items-center   bg-cover">
 <BgImage />
 <h1>{}</h1>
</main>
