<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Links page'));
	onDestroy(() => console.log('Unmounted Links page'));
	let email =	'r.l.devries@live.nl'
	import blob from '../../components/blob.svelte';
</script>