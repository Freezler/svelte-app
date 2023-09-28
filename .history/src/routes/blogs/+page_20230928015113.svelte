<script>
	import Cards from "../../components/Cards.svelte";
import MapContact from "../../components/MapContact.svelte"
					
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Blogs page'));
	onDestroy(() => console.log('Unmounted Blogs page'));
	let email =	'r.l.devries@live.nl'
</script>

<Cards