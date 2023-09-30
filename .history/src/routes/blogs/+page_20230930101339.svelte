<script>
	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>

<main
	class="flex flex-col bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat w-screen h-full items-center justify-center font-display text-3xl text-center"
>
	<div
		class="mt-[7.5rem] [&>*]:border-purplethree-800 [&>*]:border-[3px] [&>*]:drop-shadow-[-1px_5px_6px_hsla(25,60%,150%,0.5)] [&>*]:rounded-[12px] text-2xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 items-center"
	>
	<C
	</div>
</main>
