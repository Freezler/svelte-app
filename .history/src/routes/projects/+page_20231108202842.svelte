<script>
	import { onDestroy, onMount } from 'svelte';
	import Campfire from '../../components/Campfire.svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<main>
	<Campfire />
	<iframe src="https://giphy.com/embed/pOEbLRT4SwD35IELiQ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/tech-technology-mograph-pOEbLRT4SwD35IELiQ">via GIPHY</a></p>
</main>
