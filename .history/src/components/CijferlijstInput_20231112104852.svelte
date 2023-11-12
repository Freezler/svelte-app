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
	<input type="file" accept=".txt, .doc, .docx" on:change={handleFileInput} />
	<textarea bind:value={fileContent} />
  </div>
  