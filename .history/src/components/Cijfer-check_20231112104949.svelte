<!-- App.svelte -->
<script>
    import FileInput from './FileInput.svelte';
    import CijferLijstCheck from './CijferLijstCheck.svelte';
  
    let fileContent = '';
  </script>
  
  <style>
    /* voeg hier je stijlen toe indien nodig */
  </style>
  
  <div>
    <FileInput bind:fileContent={fileContent} />
    {#if fileContent}
      <CijferLijstCheck {fileContent} />
    {/if}
  </div>
  