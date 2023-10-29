<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Links page'));
	onDestroy(() => console.log('Unmounted Links page'));
	let email =	'r.l.devries@live.nl';
	import Blob from '../components/scrollBlob.svelte';
</script>
<div class="flex flex-col items-center justify-center">
<Blob/>
</div>