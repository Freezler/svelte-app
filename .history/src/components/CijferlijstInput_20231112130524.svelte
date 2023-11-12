<script>
  import { onMount } from 'svelte';
  let isEmpty = true;
  export let fileContent = '';
  export let isSuccess = null;
  let gemiddeldeCijfer = '';
  const geslaagd = 5.5;
 
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