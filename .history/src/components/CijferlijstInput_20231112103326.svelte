<!-- FileInput.svelte -->
<script>
	import { onMount } from 'svelte';
  
	let fileContent = '';
  
	function handleFileInput(event) {
	  const file = event.target.files[0];
  
	  if (file) {
		const reader = new FileReader();
  
		reader.onload = function (e) {
		  fileContent = e.target.result;
		};
  
		reader.readAsText(file);
	  }
	}
  </script>
  
  <style>
	/* voeg hier je stijlen toe indien nodig */
  </style>
  
  <div>
	<input type="file" accept=".txt" on:change={handleFileInput} class="valid:border-green-500 invalid:border-red-500 file-input file-input-bordered w-full max-w-xs" />
	<textarea bind:value={fileContent} />
  </div>
  