<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<main class="w-screen">
	<div class="grid grid-cols-4 h-screen w-screen">
		<div class="grid grid-cols-4 h-[100%] w-[100%]">
			<div class="bg-primary-50 w-[50px] ">box 1</div>
			<div class="bg-primary-100 w-[50px] ">box 2</div>
			<div class="bg-primary-200 w-[50px] ">box 3</div>
			<div class="bg-primary-300 w-[50px] ">box 4</div>
			<div class="bg-primary-400 w-[50px] ">box 5</div>
			<div class="bg-primary-500 w-[50px] ">box 6</div>
			<div class="bg-primary-600 w-[50px] ">box 7</div>
			<div class="bg-primary-700 w-[50px] ">box 8</div>
			<div class="bg-primary-800 w-[50px] ">box 9</div>
			<div class="bg-primary-900 w-[50px] ">box 10</div>
			<div class="bg-primary-1000 w-[50px] ">box 11</div>
			<div class="bg-primary-1100 w-[50px] ">box 12</div>
		</div>
		<div class="grid grid-cols-4 h-[100%] w-[100%]">
			<div class="bg-secondary-50 w-[50px] ">box 1</div>
			<div class="bg-secondary-100 w-[50px] ">box 2</div>
			<div class="bg-secondary-200 w-[50px] ">box 3</div>
			<div class="bg-secondary-300 w-[50px] ">box 4</div>
			<div class="bg-secondary-400 w-[50px] ">box 5</div>
			<div class="bg-secondary-500 w-[50px] ">box 6</div>
			<div class="bg-secondary-600 w-[50px] ">box 7</div>
			<div class="bg-secondary-700 w-[50px] ">box 8</div>
			<div class="bg-secondary-800 w-[50px] ">box 9</div>
			<div class="bg-secondary-900 w-[50px] ">box 10</div>
			<div class="bg-secondary-1000 w-[50px] ">box 11</div>
			<div class="bg-secondary-1100 w-[50px] ">box 12</div>
		</div>
		<div class="grid grid-cols-4 h-[100%] w-[100%]">
			<div class="bg-tertiary-50 w-[50px] ">box 1</div>
			<div class="bg-tertiary-100 w-[50px] ">box 2</div>
			<div class="bg-tertiary-200 w-[50px] ">box 3</div>
			<div class="bg-tertiary-300 w-[50px] ">box 4</div>
			<div class="bg-tertiary-400 w-[50px] ">box 5</div>
			<div class="bg-tertiary-500 w-[50px] ">box 6</div>
			<div class="bg-tertiary-600">box 7</div>
			<div class="bg-tertiary-700 w-[50px] ">box 8</div>
			<div class="bg-tertiary-800 w-[50px] ">box 9</div>
			<div class="bg-tertiary-900 w-[50px] ">box 10</div>
			<div class="bg-primary-100" w-[50px] >box 11</div>
			<div class="bg-tertiary-200 w-[50px] ">box 12</div>
		</div>
	</div>
</main>
 w-[50px] 