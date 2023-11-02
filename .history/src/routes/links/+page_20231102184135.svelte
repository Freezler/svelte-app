<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Links page'));
	onDestroy(() => console.log('Unmounted Links page'));
	import ScrollBlob from '../../components/scrollBlob.svelte';
	import Accordion from '../../components/Accordion.svelte';
</script>
<header></header>
<main
	class="flex h-screen scroll-smooth w-screen flex-col bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 overflow-scroll pb-24"
>		<div></div>
		<ScrollBlob />
		
</main>
