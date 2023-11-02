<script>
	let panels = [
		{
			title: 'HTML',
			content:
				'HTML is the standard markup language for documents designed to be displayed in a web browser.'
		},
		{ title: 'CSS', content: 'CSS is used to define styles for your web pages' },
		{
			title: 'JavaScript',
			content: 'JavaScript is used to add interactivity to your web pages'
		},
		{
			title: 'Svelte and SvelteKit',
			content: 'Svelte and SvelteKit are both JavaScript frameworks'
		},
		{ title: 'Tailwind CSS', content: 'Tailwind CSS is a utility-first CSS framework' }
	];

	let expandedPanel = null;

	function togglePanel(panel) {
		if (expandedPanel === panel) {
			expandedPanel = null;
		} else {
			expandedPanel = panel;
		}
	}
</script>

<div class="z-60 wrapper max-w-50 mx-auto w-[300px] px-2 mt-4">
	<div class="accordion flex flex-col space-y-6 p-0">
		{#each panels as panel, index}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="accordion-panel relative isolate overflow-hidden border border-gray-200"
				on:click={() => togglePanel(panel)}
				on:keydown={() => togglePanel(panel)}
				aria-roledescription="accordion"
			>
				<div class="accordion-trigger" aria-expanded={panel === expandedPanel}>
					{#if panel === expandedPanel}
						<div
							class="accordion-icon z-10 hidden h-[40px] w-[40px] -translate-y-1/2 transform rounded-full bg-gray-900 p-3"
						></div>
					{/if}
					<div
						class="accordion-title relative isolate grid place-items-center rounded-sm bg-gray-200 py-2 pl-14 font-display font-bold"
					>
						{panel.title}
					</div>
				</div>
				{#if expandedPanel === panel}
					<div class="accordion-content z-20 bg-red-600 px-6 py-4 opacity-40">
						<p class="text-white">
							{panel.content}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
