<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted Campfire page'));
	let avatarUrl = '';
  
  onMount(async () => {
    const response = await fetch('https://source.unsplash.com/160x160/?avatar');
    avatarUrl = response.url;
  });
</script>

<main class="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
<div class="flex flex-col  w-48 h-48 bg-image-[{avatarUrl}] border-2 border-purplethree-400 rounded-[50%]">
	
	
</div>
</main>