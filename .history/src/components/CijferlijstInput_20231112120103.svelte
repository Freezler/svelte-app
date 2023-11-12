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
<div class="text-center text-white -translate-y-4 w-[70%]"><h3>voer een .txt of word bestand in om te checken.
	zorg dat het een cijferlijst is met de cijfers gescheiden door een komma. bv. [1,2,3,4,5,6,7,8,9]
</h3></div>
<div class="p-4 min-w-[340px]">
  <input
	
	type="file"
	accept=".txt, .doc, .docx"
	on:change={handleFileInput}
	class="sel:text-green-400 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-1 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
  />
  <textarea bind:value={fileContent} class="text-white h-[2rem] focus:outline-none resize-none w-full min-w-[fit-content] bg-transparent border-none select-none border-gray-300 rounded p-2"></textarea>

  {#if isSuccess}
	<h3 class="text-green-500 mt-2 mx-auto">Van harte gefeliciteerd, je bent geslaagd! Gemiddelde Cijfer: {gemiddeldeCijfer}</h3>
  {:else}
	<h3 class="text-red-500 mt-2 mx-auto">Niet geslaagd. Gemiddelde Cijfer: {gemiddeldeCijfer}</h3>
  {/if}
</div>