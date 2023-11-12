<script>
  import { onMount } from 'svelte';
  let isEmpty = true;
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