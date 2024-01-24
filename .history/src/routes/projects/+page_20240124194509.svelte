<script>
	import { onDestroy, onMount } from 'svelte';
	import LoginForm from '../../components/LoginForm.svelte';
	import { fade } from 'svelte/transition';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>
<main  transition:fade={{ delay: 2, duration:600 }}
class="flex h-screen flex-col items-center justify-center">
	<LoginForm/>
	<slot />
</main>
