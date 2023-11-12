<!-- FileInput.svelte -->
<script>
  import { onMount } from 'svelte';

  export let fileContent = '';
  export let isSuccess = false;
  let gemiddeldeCijfer = '';
 
  function calculateGemiddeldeCijfer(content) {
  const cijfers = content
    .split('\n')
    .filter(line => line.trim() !== '')
    .map(Number);

  console.log('cijfers:', cijfers);

  const totaal = cijfers.reduce((acc, curr) => acc + curr, 0);
  console.log('totaal:', totaal);

  const gemiddelde = totaal / cijfers.length;
  console.log('gemiddelde:', gemiddelde);

  return gemiddelde;
}

  function handleFileInput(event) {
	const file = event.target.files[0];
  
	if (file) {
	  file.text().then(content => {
		if (content.trim() !== '') {
		  fileContent = content;
		  isSuccess = true;
		  gemiddeldeCijfer = calculateGemiddeldeCijfer(fileContent);
		}
	  });
	}
  }

  
</script>
<div class="text-center text-white -translate-y-4 w-[300px]"><h3>voer een .txt of word bestand in om te checken.
	zorg dat het een cijferlijst is met de cijfers gescheiden door een komma. bv. [1,2,3,4,5,6,7,8,9]
</h3></div>
<div class="p-4 min-w-[340px]">
	<input
	  type="file"
	  accept=".txt, .doc, .docx"
	  on:change={handleFileInput}
	  class="valid:text-green-400 invalid:text-red-500 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-1 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
	/>
	<textarea bind:value={fileContent} class="text-white h-[2rem] focus:outline-none resize-none w-[content] min-w-[content] bg-transparent border-[1px] select-none border-gray-300 rounded p-2"></textarea>
  
	{#if isSuccess}
	  <h3 class=w-"text-green-500 mt-2 mx-auto px-3 py-1">Van harte gefeliciteerd, je bent geslaagd! Gemiddelde Cijfer: {gemiddeldeCijfer}</h3>
	{:else}
	  <h3 class="text-red-500 mt-2 mx-auto px-3 py-1">Niet geslaagd. Gemiddelde Cijfer: {gemiddeldeCijfer}</h3>
	{/if}
  </div>