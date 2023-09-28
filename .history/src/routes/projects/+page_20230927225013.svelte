<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<div class="mx-auto mt-10 w-full max-w-sm rounded-md border border-gray-300 p-4 -tran">
	<div class="animate-pulse space-x-4 mt-10">
	  <div class="grid">
		<div class="flex">
		  <div class="w-10 rounded-full bg-slate-200"></div>
		  <div class="ms-4 w-full space-y-6">
			<div class="h-2 rounded bg-slate-200"></div>
			<div class="space-y-3">
			  <div class="grid grid-cols-3 gap-4">
				<div class="col-span-2 h-2 rounded bg-slate-200"></div>
				<div class="col-span-1 h-2 rounded bg-slate-200"></div>
			  </div>
			  <div class="h-2 rounded bg-slate-200"></div>
			</div>
		  </div>
		</div>
		<div class="mt-5 space-y-6 py-1">
		  <div class="h-2 rounded bg-slate-200"></div>
		  <div class="space-y-3">
			<div class="grid grid-cols-3 gap-4">
			  <div class="col-span-2 h-2 rounded bg-slate-200"></div>
			  <div class="col-span-1 h-2 rounded bg-slate-200"></div>
			</div>
			<div class="h-2 rounded bg-slate-200"></div>
		  </div>
		  <div class="h-2 rounded bg-slate-200"></div>
		</div>
	  </div>
	</div>
  </div>