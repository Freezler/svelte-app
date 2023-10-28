<script>
	import { onDestroy, onMount } from 'svelte';
	import ImgOverlay from '../components/Img-overlay.svelte';
	import HeroButton from './ComHeroButton.svelte';
	
	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10 w[110%] h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	<slot />
	<HeroButton />
</main>
<!-- <ImgOverlay /> -->

