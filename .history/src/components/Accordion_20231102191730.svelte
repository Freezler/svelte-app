<script>
    let panels = [
        {
            title: 'Panel 1',
            content:
                'lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345lorem345'
        },
        { title: 'Panel 2', content: 'Content for Panel 2' },
        { title: 'Panel 3', content: 'Content for Panel 3' },
        { title: 'Panel 4', content: 'Content for Panel 4' },
        { title: 'Panel 5', content: 'Content for Panel 5' }
    ];

    let expandedPanel = null;

    function togglePanel(panel) {
        expandedPanel = expandedPanel === panel ? null : panel;
    }
</script>

<div class="z-60 wrapper max-w-50 z-50 mx-auto px-4">
    <div class="accordion flex flex-col space-y-4 p-2">
        {#each panels as panel, index}
            <div
                class="accordion-panel relative isolate overflow-hidden"
                on:click={() => togglePanel(panel)} on:keydown={() => togglePanel(panel)} aria-roled="button"
            >
                <div class="accordion-trigger" aria-expanded={panel === expandedPanel}>
                    <div
                        class="accordion-icon bg-[hsl(0 0% 0% / 0.55)] aspect-w-1 aspect-h-1 rounded-50 z-10 w-[100px] fill-[blue] p-3"
                    ></div>
                    <div
                        class="accordion-title text-1.5 relative isolate grid place-items-center font-bold"
                    >
                        {panel.title}
                    </div>
                </div>
                {#if expandedPanel === panel}
                    <div class="accordion-content bg-red-600 opacity-40">
                        <p>
                            {panel.content}
                        </p>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    /* Replace Tailwind CSS classes here */
    .accordion-panel.selected {
        /* Add your custom styles for the selected panel here */
        color: red;
    }
</style>