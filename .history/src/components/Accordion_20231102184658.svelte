<div class="wrapper max-w-50 mx-auto px-4 z-50">
    <div class="wrapper max-w-50 mx-auto px-4 z-50">
        <div class="accordion flex flex-col space-y-4 p-2">
          {#each panels as panel, index}
            <div
              class="accordion-panel relative isolate overflow-hidden"
              class:selected={panel === expandedPanel}
              on:click={() => togglePanel(panel)}
            >
              <div class="accordion-trigger">
                <div class="accordion-icon fill-[blue] bg-[hsl(0 0% 0% / 0.55)] w-[100px] aspect-w-1 aspect-h-1 p-3 rounded-50 z-10"></div>
                <div class="accordion-title text-1.5 font-bold relative isolate grid place-items-center">
                  {panel.title}
                </div>
              </div>
              <div class="accordion-content">
                <p class="transform-[translateY(2rem)] opacity-0 transform-[translateY(0)] opacity-100">
                  {panel.content}
                </p>
              </div>
            </div>
          {/each}
        </div>
    </div>
</div>