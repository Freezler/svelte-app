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

<div class="z-60 max-w-50 mx-auto mt-[10%] w-[80%]   animate-slow-slide-down">
	<div class="accordion flex flex-col space-y-0 p-0">
		{#each panels as panel, index}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="accordion-panel relative isolate overflow-hidden "
				@on:click={() => togglePanel(panel)}
				on:keydown={() => togglePanel(panel)}
                on:mouseover={() => togglePanel(panel)}
                on:focus={() => togglePanel(panel)} 
				aria-roledescription="accordion"
			>
				<div class="accordion-trigger" aria-expanded={panel === expandedPanel}>
					<div
						class="text-white animate-fast-fade-outaccordion-title relative isolate grid place-items-center  bg-gray-100 bg-opacity-30 font-display font-bold"
					>
						{panel.title}
					</div>
				</div>
				{#if expandedPanel === panel}
					<div class="accordion-content z-20 bg-astral-400 px-6 py-4 animate-slow-fade-in">
						<p class="text-white">
							{panel.content}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
