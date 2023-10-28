<script>
  import ColorCards from '../../components/ColorCards.svelte';

	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>
<ColorCards></ColorCards>
