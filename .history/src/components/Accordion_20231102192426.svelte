<script>
	let panels = [
		{
			title: 'HTML',
			content:
				'HTML is the standard markup language for documents designed to be displayed in a web browser.'
		},
		{ title: 'CSS', content: 'CSS is used to define styles for your web pages' },
		{ title: 'javaScript', content: 'javaScript is used to add interactivity to your web pages' },
		{ title: 'Svelte and SvelteKit', content: 'Svelte and SvelteKit are both JavaScript frameworks' },
		{ title: 'TailwindCSS', content: 'TailwindCSS is a utility-first CSS framework' }
	];

	let expandedPanel = null;

	function togglePanel(panel) {
		expandedPanel = expandedPanel === panel ? null : panel;
	}
</script>

<div class="z-60 wrapper max-w-50 z-50 mx-auto px-4 w-[300px]">
	<div class="accordion flex flex-col space-y-0 p-2">
		{#each panels as panel, index}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="accordion-panel relative isolate overflow-hidden"
				on:click={() => togglePanel(panel)}
				on:keydown={() => togglePanel(panel)}
				aria-roledescription="accordion"
			>
				<div class="accordion-trigger" aria-expanded={panel === expandedPanel}>
					<div
						class="accordion-icon bg-[hsl(0 0% 0% / 0.55)] aspect-w-1 aspect-h-1 rounded-50 z-10 w-[100px] fill-[blue] p-3"
					></div>
					<div
						class="accordion-title font-display relative isolate grid place-items-center font-bold bg-slate-200 rounded-sm"
					>
						{panel.title}
					</div>
				</div>
				{#if expandedPanel === panel}
					<div class="accordion-content bg-red-600 opacity-40 w-[300px]">
						<p>
							{panel.content}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
