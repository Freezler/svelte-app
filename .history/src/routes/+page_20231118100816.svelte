<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Bgimg from '../components/Bgimg.svelte';

	onMount(() => console.log('Mounted about page'));
	onDestroy(() => console.log('Unmounted about page'));
</script>

<main
	class="scroll-invisible m-0 grid h-screen w-screen grid-cols-1 grid-rows-1 place-items-center justify-items-center bg-black bg-cover bg-center bg-no-repeat p-0 bg-blend-lighten hover:bg-blend-darken"
>
	<Bgimg />
</main>
