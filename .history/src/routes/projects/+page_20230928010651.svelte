<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<main class="w-screen">
	<div class="grid grid-cols-4 h-[100%] w-[100%]">
		<div class="">
			<div class="bg-primary-50">box 1</div>
			<div class="bg-primary-100">box 2</div>
			<div class="bg-primary-200">box 3</div>
			<div class="bg-primary-300">box 4</div>
			<div class="bg-primary-400">box 5</div>
			<div class="bg-primary-500">box 6</div>
			<div class="bg-primary-600">box 7</div>
			<div class="bg-primary-700">box 8</div>
			<div class="bg-primary-800">box 9</div>
			<div class="bg-primary-900">box 10</div>
			<div class="bg-secondary-100">box 11</div>
			<div class="bg-secondary-200">box 12</div>
		</div>
		<div class="">
			<div class="bg-secondary-50">box 1</div>
			<div class="bg-secondary-100">box 2</div>
			<div class="bg-secondary-200">box 3</div>
			<div class="bg-secondary-300">box 4</div>
			<div class="bg-secondary-400">box 5</div>
			<div class="bg-secondary-500">box 6</div>
			<div class="bg-secondary-600">box 7</div>
			<div class="bg-secondary-700">box 8</div>
			<div class="bg-secondary-800">box 9</div>
			<div class="bg-secondary-900">box 10</div>
			<div class="bg-secondary-1100">box 11</div>
			<div class="bg-secondary-1200">box 12</div>
		</div>
		<div class="">
			<div class="bg-tertiary-50">box 1</div>
			<div class="bg-tertiary-100">box 2</div>
			<div class="bg-tertiary-200">box 3</div>
			<div class="bg-tertiary-300">box 4</div>
			<div class="bg-tertiary-400">box 5</div>
			<div class="bg-tertiary-500">box 6</div>
			<div class="bg-tertiary-600">box 7</div>
			<div class="bg-tertiary-700">box 8</div>
			<div class="bg-tertiary-800">box 9</div>
			<div class="bg-tertiary-900">box 10</div>
			<div class="bg-primary-100">box 11</div>
			<div class="bg-tertiary-200">box 12</div>
		</div>
	</div>
</main>
