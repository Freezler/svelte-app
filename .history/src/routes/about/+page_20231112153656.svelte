<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Bgimg from '../../components/Bgimg.svelte';
	
	onMount(() => console.log('Mounted about page'));
	onDestroy(() => console.log('Unmounted about page'));
</script>

<main class="grid">
<Bgimg /> 

</main>
