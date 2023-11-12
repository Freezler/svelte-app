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





<div class="p-4">
  <input type="file" accept=".txt, .doc, .docx" on:change={handleFileInput} class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-pink-50 file:text-pink-700
        hover:file:bg-pink-100" />
  <textarea bind:value={fileContent} class="w-full h-32 border border-gray-300 rounded p-2"></textarea>

  {#if isSuccess}
	<p class="text-green-500 mt-2 mx-auto">`Geslaagd! {fileContent}`</p> <p class="text-green-500 mt-2 mx-auto">`Geslaagd! {${fileContent}`</p>
  {:else}
	<p class="text-red-500 mt-2 mx-auto">Niet geslaagd.</p>
  {/if}
</div>