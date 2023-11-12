<!-- FileInput.svelte -->
<script>
  import { onMount } from 'svelte';

  export let fileContent = '';
  export let isSuccess = false;
  let gemiddeldeCijfer = '';

  function handleFileInput(event) {
	const file = event.target.files[0];

	if (file) {
	  const reader = new FileReader();

	  reader.onload = function (e) {
		const content = e.target.result;
		if (content.trim() !== '') {
		  fileContent = content;
		  isSuccess = true;
		  gemiddeldeCijfer = calculateGemiddeldeCijfer(fileContent);
		}
	  };

	  reader.readAsText(file);
	}
  }

  function calculateGemiddeldeCijfer(content) {
	const cijfers = content.split('\n').filter(line => line.trim() !== '').map(Number);
	const totaal = cijfers.reduce((acc, curr) => acc + curr, 0);
	return totaal / cijfers.length;
  }
</script>

<div class="p-4 min-w-[340px]">
  <input
	type="file"
	accept=".txt, .doc, .docx"
	on:mousedown={handleFileInput}
	class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-1 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
  />
  <textarea bind:value={fileContent} class="w-full h-[content] border border-gray-300 rounded p-2"></textarea>

  {#if isSuccess}
	<p class="text-green-500 mt-2 mx-auto">Van harte gefeliciteerd, je bent geslaagd! Gemiddelde Cijfer: {gemiddeldeCijfer}</p>
  {:else}
	<p class="text-red-500 mt-2 mx-auto">Niet geslaagd. Gemiddelde Cijfer: {gemiddeldeCijfer}</p>
  {/if}
</div>