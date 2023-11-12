<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Bgimg from '../../components/Bgimg.svelte';
	
	
	onMount(() => console.log('Mounted about page'));
	onDestroy(() => console.log('Unmounted about page'));
	
</script>

<main class="w-screen bg-tr grid grid-cols-1 grid-rows-1 h-screen bg-cover bg-center bg-no-repeat w-screen p-0 m-0 place-items-center justify-items-center scroll-invisible">
<Bgimg /> 

</main>
