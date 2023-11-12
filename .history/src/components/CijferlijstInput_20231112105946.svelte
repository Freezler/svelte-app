<!-- FileInput.svelte -->
<script>
  import { onMount } from 'svelte';

  export let fileContent = '';
  export let isSuccess = false;

  function handleFileInput(event) {
	const file = event.target.files[0];

	if (file) {
	  const reader = new FileReader();

	  reader.onload = function (e) {
		fileContent = e.target.result;
		if (fileContent.trim() !== '') {
		  isSuccess = true;
		}
	  };

	  reader.readAsText(file);
	}
  }
</script>

<style>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';

  /* Voeg hier je aangepaste stijlen toe */
</style>

<div class="p-4">
  <input type="file" accept=".txt, .doc, .docx" on:change={handleFileInput} class="mb-4" />
  <textarea bind:value={fileContent} class="w-full h-32 border border-gray-300 rounded p-2"></textarea>

  {#if isSuccess}
	<p class="text-green-500 mt-2">Geslaagd!</p>
  {:else}
	<p class="text-red-500 mt-2">Niet geslaagd.</p>
  {/if}
</div>