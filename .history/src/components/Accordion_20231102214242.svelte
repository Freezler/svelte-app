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

<div class="z-60 wrapper max-w-50 mx-auto px-2 mt-4 w-[300px] sp">
    <div class="accordion flex flex-col p-0">
        {#each panels as panel, index}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="accordion-panel relative isolate overflow-hidden border border-gray-200 "
                on:click={() => togglePanel(panel)}
                on:keydown={() => togglePanel(panel)}
                aria-roledescription="accordion"
            >
                <div class="accordion-trigger" aria-expanded={panel === expandedPanel}>
                    {#if panel === expandedPanel}
                        <div
                            class="accordion-icon bg-red rounded-full z-10 w-[40px] p-3 absolute top-[10%] transform -translate-y-1/2     "
                        ></div>
                    {/if}
                    <div
                        class="accordion-title font-display relative isolate grid place-items-center font-bold bg-[rgba(0,0,0,0.2)] text-white p-4"
                        style="z-index: 1;"
                    >
                        {panel.title}
                    </div>
                </div>
                {#if expandedPanel === panel}
                    <div class="accordion-content bg-red-600 opacity-40 py-4 px-6 z-20">
                        <p class="text-white">
                            {panel.content}
                        </p>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>