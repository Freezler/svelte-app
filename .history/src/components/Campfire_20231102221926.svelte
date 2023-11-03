<script>
	import { afterUpdate, onMount } from 'svelte';

	let avatarUrl = '';
	let isLoading = true;

	const reloadAvatar = async () => {
		isLoading = true;
		const response = await fetch('https://source.unsplash.com/1080x1080/?experimental?random');
		avatarUrl = response.url;
		isLoading = false;
	};

	onMount(reloadAvatar);

	afterUpdate(() => {
		if (isLoading) return; // Only reload avatar after initial load
		const image = document.querySelector('.avatar-image');
		image.style.backgroundImage = `url(${avatarUrl})`;
	});
</script>

<main
	class="mt-[10%] grid h-screen min-h-screen w-screen animate-slow-fade-in grid-cols-1 flex-col place-items-center justify-center gap-4 bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900"
>
	{#if isLoading}
		<div
			class=" img-shadow-[3px_3px_5px_rgba(22,22,22,0.7)] flex h-[60%] max-h-[70%] min-h-[100%] w-[60%] min-w-[80%] max-w-[60%] animate-pulse items-center justify-center rounded-[8px] border-[1px] border-purplethree-400"
		>
			<p class="animate-pulse text-xl text-purpleone-100">Loading...</p>
		</div>
	{:else if avatarUrl !== ''}
		<div
			class="shadow-[2px_2px_12px_[rgba(22,22,22,0.7]] drop-shadow-[2px_2px_12px_hsla(234,100%,59%,0.9)]] avatar-image flex h-[60%] max-h-[70%] min-h-[100%] w-[60%] min-w-[80%] max-w-[60%] flex-col rounded-[8px] border-[1px] border-bluetwo-600 bg-cover bg-center drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)]"
		><h1 class="text-purpleone-100 text-8xl grid place-items-center h-full">randy</h1>
	<p class="text-purpleone-100 text-2xl grid place-items-center h-full w-[60%] tex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat dolore rem obcaecati omnis deserunt.</p></div>
	{/if}

	<button
		on:click={reloadAvatar}
		class="mx-auto w-[100px] -translate-y-36 rounded-[8px] border-2 border-purpleone-700 bg-purpleone-900 bg-opacity-40 p-3 text-rosetwo-200 opacity-80 drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]"
		>Next..</button
	>
</main>
