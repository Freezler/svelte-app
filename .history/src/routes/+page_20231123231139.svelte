<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Bgimg from '../components/Bgimg.svelte';

	onMount(() => console.log('Mounted Home page'));
	onDestroy(() => console.log('Unmounted Home page'));
</script>

<main
	class="scroll-invisible  m-0 flex w-screen img h-[100svh]  bg-red-500 bg-cover bg-center bg-no-repeat p-0 scroll-smooth"
>
	<Bgimg />
</main>
