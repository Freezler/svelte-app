<script>
	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main
	class="flex h-screen w-[100%] flex-col items-center justify-center gap-4 overflow-scroll scroll-smooth bg-gradient-to-b from-astral-200 via-gray-200 to-astral-400 bg-cover"
>
	<div
		class="relative grid h-[100%] w-screen grid-cols-1 overflow-scroll scroll-smooth bg-cover bg-center bg-no-repeat pt-[20px] sm:pt-[30px] md:pt-[40px] lg:pt-[332px] xl:pt-40 xxl:pt-40"
	>
		<Header />
		<div class="container w-[100%]">
			<div
				class="mt-32 flex h-full w-screen flex-col items-center justify-center bg-opacity-10 bg-opacity-10 bg-gradient-to-b from-astral-900 via-gray-900 to-astral-900 py-44 text-center"
			>
				<p class="w-[70%] text-white">
					Hi and Welcome to my website! scroll down for a small introduction in to teh
					world of web development.
				</p>
			</div>
		</div>
		<Cards />
	</div>
</main>
