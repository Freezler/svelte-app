<script>
	import { onDestroy, onMount } from 'svelte';
	import Cards from '../../components/ColorCards.svelte';

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));

	import colors from 'tailwindcss/colors';
	const customColors = colors.custom;

	let colorEntries = [];

	onMount(() => {
		colorEntries = Object.entries(customColors);
	});
</script>

<div class="flex flex-wrap">
	{#each colorEntries as [colorName, hexValue]}
		<div class="color-card" key={colorName}>
			<div class="color-box" style="background-color: {hexValue};" />
			<div class="color-info">
				<span class="color-name">{colorName}</span>
				<span class="color-hex">{hexValue}</span>
			</div>
		</div>
	{/each}
</div>

<style>
	.color-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 8px;
		width: 200px;
		text-align: center;
	}

	.color-box {
		width: 100px;
		height: 100px;
		margin-bottom: 10px;
	}

	.color-name {
		font-weight: bold;
	}
</style>
