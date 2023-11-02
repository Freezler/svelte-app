<!-- Accordion.svelte -->
<script>
    let panels = [
      { title: "Panel 1", content: "Content for Panel 1" },
      { title: "Panel 2", content: "Content for Panel 2" },
      { title: "Panel 3", content: "Content for Panel 3" },
      { title: "Panel 4", content: "Content for Panel 4" },
      { title: "Panel 5", content: "Content for Panel 5" },
    ];
  
    let expandedPanel = null;
  
    function togglePanel(panel) {
      expandedPanel = expandedPanel === panel ? null : panel;
    }
  </script>
  
  <style>
    /* Replace Tailwind CSS classes here */
  </style>
  
  <div class="wrapper max-w-50 mx-auto px-4 z-50">
    <div class="accordion flex flex-col space-y-4 p-2">
      {#each panels as panel, index}
        <div
          class="accordion-panel relative isolate overflow-hidden"
          class:selected={panel === expandedPanel}
          on:click={() => togglePanel(panel)}
        >
          <div class="accordion-trigger">
            <div class="accordion-icon fill-[_panel-color] bg-[hsl(0 0% 0% / 0.55)] w-[_button-size] aspect-w-1 aspect-h-1 p-3 rounded-50 z-10"></div>
            <div class="accordion-title text-1.5 font-bold relative isolate grid place-items-center">
              {panel.title}
            </div>
          </div>
          <div class="accordion-content">
            <p class="transform-[translateY(2rem)] opacity-0" class:transform-[translateY(0)] class:opacity-100>
              {panel.content}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  