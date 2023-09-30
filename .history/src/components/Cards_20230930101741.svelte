<script>
	import { onDestroy, onMount } from 'svelte';
	import colors from "tailwindcss/colors";
   const customColors = colors.custom;
	onMount(() => console.log('Mounted Cards page'));
	onDestroy(() => console.log('Unmounted Cards page'));
</script>

{#each Object.entries(customColors) as [colorName, hexValue]}
    <div class="color-container" key={colorName}>
      <div class="color">
        <div class="color-box" style="background-color: {hexValue};"></div>
        <div class="color-text">{colorName} ({hexValue})</div>
      </div>
    </div>
  {/each}