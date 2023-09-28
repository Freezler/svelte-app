<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Cards page'));
	onDestroy(() => console.log('Unmounted Cards page'));
</script>

<main class="bg-gradient-to-br from-primary-900 via-secondary-500 to-tertiary-900 min-w-full max-h-full  bg-cover bg-center bg-repeat">
	<slot />
</main>