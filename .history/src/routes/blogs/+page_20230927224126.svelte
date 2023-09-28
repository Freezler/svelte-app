<script>
	import MapContact from "../../components/MapContact.svelte"
					
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Blogs page'));
	onDestroy(() => console.log('Unmounted logs page'));
	let email =	'r.l.devries@live.nl'
</script>