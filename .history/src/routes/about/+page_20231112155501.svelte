<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Bgimg from '../../components/Bgimg.svelte';
	
	onMount(() => console.log('Mounted about page'));
	onDestroy(() => console.log('Unmounted about page'));
</script>

<main class="grid grid-cols-1 grid-rows-2 h-screen bg-cov w-screen p-0 m-0 place-items-center justify-items-center">
<Bgimg /> 

</main>
