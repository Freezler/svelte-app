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

<div class="bg-transparent text-center animate-slow-slide-up z-60 wrapper max-w-50 mx-auto mt-[16px] min-w-[80%] rounded-sm p-2">
	<div class="flex flex-col space-y-1  rounded-md border-[1px] border-astral-900">
		{#each panels as panel}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="relative isolate animate-fast-fade-in overflow-hidden"
				on:click={() => togglePanel(panel)}
				on:keydown={() => togglePanel(panel)}
				aria-roledescription="accordion"
			>
				<div class="" aria-expanded={panel === expandedPanel}>
					<!-- svelte-ignore empty-block -->
					{#if panel === expandedPanel}{/if}
					<div
						class="relative isolate grid place-items-center bg-[rgba(0,0,0,0.2)] p-2 font-display font-bold text-white min-w-[8"
					>
						{panel.title}
					</div>
				</div>
				{#if expandedPanel === panel}
					<div
						class="z-20 animate-slow-fade-in bg-astral-900 bg-opacity-70 px-6 py-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-chevron-up mx-auto animate-pulse"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="white"
							fill="rgba(39, 68, 82, 100%)"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
							<polyline points="6 15 12 9 18 15" />
						</svg>
						<p class="text-white pb-3">
							{panel.content}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
