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

<div class="grid grid-cols-1  grid-rows-1 bg-transparent animate-fast-slide-up z-60 wrapper max-w-[400px] mx-auto mt-[0] w-[80%] text-center rounded-sm p-8">
	<div class="flex flex-col space-y-1  rounded-md border-[1px] border-astral-900">
		{#each panels as panel}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="relative isolate animate-slow-fade-in overflow-hidden"
				on:click={() => togglePanel(panel)}
				on:keydown={() => togglePanel(panel)}
				aria-roledescription="accordion"
			>
				<div class="" aria-expanded={panel === expandedPanel}>
					<!-- svelte-ignore empty-block -->
					{#if panel === expandedPanel}{/if}
					<div
						class="relative animate-btn isolate grid place-items-center bg-[rgba(0,0,0,0.2)] p-2 font-display font-bold text-white"
					>
						{panel.title}
					</div>
				</div>
				{#if expandedPanel === panel}
					<div
						class=" max-w-[100%] z-20 animate-fast-fade-in bg-astral-900 bg-opacity-70 px-6 py-0"
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
						<p class= "text-white pb-3">
							{panel.content}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
<svg
xmlns="http://www.w3.org/2000/svg"
class="mx-auto animate-bounce"
width="28"
height="28"
viewBox="0 0 24 24"
stroke-width="2.5"
stroke="white"
fill="none"
stroke-linecap="round"
stroke-linejoin="round"
>
<path stroke="none" d="M0 0h24v24H0z" fill="none" class="bg-redone-900"/>
<path d="M6 9l6 6l6 -6" />
<path stroke="none" d="M10 9h24v24H0z" fill="none" />
<path d="M6 9l6 6l6 -6" />


</svg>