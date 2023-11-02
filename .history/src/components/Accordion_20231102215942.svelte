<script>
    let panels = [
        {
            title: 'HTML',
            content: 'HTML is the standard markup language for documents designed to be displayed in a web browser.'
        },
        { title: 'CSS', content: 'CSS is used to define styles for your web pages' },
        { title: 'JavaScript', content: 'JavaScript is used to add interactivity to your web pages' },
        { title: 'Svelte and SvelteKit', content: 'Svelte and SvelteKit are both JavaScript frameworks' },
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

<div class="z-60 wrapper max-w-50 mx-auto p-2 mt-[100px] w-[300px] rounded-sm">
    <div class="accordion flex flex-col p-0 space-y-4">
        {#each panels as panel}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="accordion-panel relative isolate overflow-hidden animate-slow-slide-up"
                on:click={() => togglePanel(panel)}
                on:keydown={() => togglePanel(panel)}
                aria-roledescription="accordion"
            >
                <div class="accordion-trigger" aria-expanded={panel === expandedPanel}>
                    {#if panel === expandedPanel}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-chevron-up mx-auto"
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
                    {/if}
                    <div
                        class="accordion-title font-display relative isolate grid place-items-center font-bold bg-[rgba(0,0,0,0.2)] text-white p-2"
                      
                    >
                        {panel.title}
                    </div>
                </div>
                {#if expandedPanel === panel}
                    <div class="accordion-content bg-astral-900 opacity-40 py-4 px-6 z-20">
                        <p class="text-white">
                            {panel.content}
                        </p>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>