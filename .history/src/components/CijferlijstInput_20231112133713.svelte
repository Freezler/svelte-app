<script>
	import { onMount } from 'svelte';
	let isEmpty = true;
	export let fileContent = null;
	export let isSuccess = null;
	let gemiddeldeCijfer = '';
	const geslaagd = 6.5;
   
	function calculateGemiddeldeCijfer(content) {
	  const cijfers = content
		.split('\n')
		.filter(line => line.trim() !== '')
		.map(Number);
  
	  const totaal = cijfers.reduce((acc, curr) => acc + curr, 0);
	  const gemiddelde = totaal / cijfers.length;
  
	  return gemiddelde;
	}
  
	function handleFileInput(event) {
	  const file = event.target.files[0];
  
	  if (file) {
		isEmpty = false; // Update isEmpty based on file selection
  
		file.text().then(content => {
		  if (content.trim() !== '') {
			fileContent = content;
			isSuccess = true;
			gemiddeldeCijfer = calculateGemiddeldeCijfer(fileContent);
		  }
		});
	  } else {
		isEmpty = true; // Reset isEmpty if no file is selected
	  }
	}
  </script>

<!-- Rest of the code remains the same -->
<div class="text-center text-white -translate-y-4 w-[300px]"><h3>voer een .txt of word bestand in om te checken.
	zorg dat het een cijferlijst is met de cijfers gescheiden door een komma. bv. [1,2,3,4,5,6,7,8,9]
</h3></div>
<div class="p-4 min-w-[340px] text-center border-collapse select-none">
	<input
	  type="file"
	  accept=".txt, .doc, .docx"
	 
	  on:change={handleFileInput}
	  class="border-[1px] border-blueone-100 valid:text-green-400 invalid:text-red-500 block w-full rounded-t-md text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-[4px] file:border-1 file:text-sm file:font-semibold file:bg-astral-400 file:text-white hover:file:text-pink-700 hover:file:bg-greentwo-300 bg-cover"
	/>
	<textarea bind:value={fileContent} class=" text-center text-white h-[2.4rem] focus:outline-none resize-none w-[100%] min-w-[content] bg-transparent border-[1px] select-none border-gray-300 rounded-b-[2px] border-collapse p-2"></textarea>
  
	{#if isEmpty}
  <h3 id="output" class="w-[300px] text-red-500 mt-2 mx-auto px-3 py-1">Selecteer een bestand</h3>
{:else if (gemiddeldeCijfer || gemiddeldeCijfer === 0) && gemiddelde >= geslaagd}
  <h3 class="w-[300px] text-green-500 mt-2 mx-auto px-3 py-1">Van harte gefeliciteerd, je bent geslaagd! Gemiddelde Cijfer: {gemiddeldeCijfer}</h3>
{:else}
  <h3 class="w-[300px] text-red-500 mt-2 mx-auto px-3 py-1">Niet geslaagd. Gemiddelde Cijfer: {gemiddeldeCijfer}</h3>
{/if}
  </div>