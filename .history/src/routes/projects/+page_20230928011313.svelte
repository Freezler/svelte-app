<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<main class="w-screen">
	<div class="grid grid-cols-4 h-screen w-screen">
		<div class="grid grid-cols-4 h-[100%] w-[100%]">
			<div class="bg-primary-50 w-">box 1</div>
			<div class="bg-primary-100 w-">box 2</div>
			<div class="bg-primary-200 w-">box 3</div>
			<div class="bg-primary-300 w-">box 4</div>
			<div class="bg-primary-400 w-">box 5</div>
			<div class="bg-primary-500 w-">box 6</div>
			<div class="bg-primary-600 w-">box 7</div>
			<div class="bg-primary-700 w-">box 8</div>
			<div class="bg-primary-800 w-">box 9</div>
			<div class="bg-primary-900 w-">box 10</div>
			<div class="bg-primary-1000 w-">box 11</div>
			<div class="bg-primary-1100 w-">box 12</div>
		</div>
		<div class="grid grid-cols-4 h-[100%] w-[100%]">
			<div class="bg-secondary-50 w-">box 1</div>
			<div class="bg-secondary-100 w-">box 2</div>
			<div class="bg-secondary-200 w-">box 3</div>
			<div class="bg-secondary-300 w-">box 4</div>
			<div class="bg-secondary-400 w-">box 5</div>
			<div class="bg-secondary-500 w-">box 6</div>
			<div class="bg-secondary-600 w-">box 7</div>
			<div class="bg-secondary-700 w-">box 8</div>
			<div class="bg-secondary-800 w-">box 9</div>
			<div class="bg-secondary-900 w-">box 10</div>
			<div class="bg-secondary-1000 w-">box 11</div>
			<div class="bg-secondary-1100 w-">box 12</div>
		</div>
		<div class="grid grid-cols-4 h-[100%] w-[100%]">
			<div class="bg-tertiary-50 w-">box 1</div>
			<div class="bg-tertiary-100 w-">box 2</div>
			<div class="bg-tertiary-200 w-">box 3</div>
			<div class="bg-tertiary-300 w-">box 4</div>
			<div class="bg-tertiary-400 w-">box 5</div>
			<div class="bg-tertiary-500 w-">box 6</div>
			<div class="bg-tertiary-600">box 7</div>
			<div class="bg-tertiary-700 w-">box 8</div>
			<div class="bg-tertiary-800 w-">box 9</div>
			<div class="bg-tertiary-900 w-">box 10</div>
			<div class="bg-primary-100" w->box 11</div>
			<div class="bg-tertiary-200 w-">box 12</div>
		</div>
	</div>
</main>
 w-