<!-- CijferLijstCheck.svelte -->
<script>
	let output = "";
	const cijferLijst = [2.1, 9.3, 1.9, 6.7, 8, 6, 6, 7, 6, 3, 6, 9];
	const geslaagd = 6.5 * cijferLijst.length;
	const indexEen = 0;
  
	function gemCijfer() {
	  const cijfer = cijferLijst.reduce((teller, tempCijfer) => teller + tempCijfer, indexEen);
	  if (cijfer >= geslaagd) {
		output = `Je cijfer gemiddelde is ${(cijfer.toFixed(1) / 10).toFixed(1)}\nVan harte gefeliciteerd, je bent geslaagd!`;
		console.log(`Je cijfer gemiddelde is ${(cijfer.toFixed(1) / 10).toFixed(1)}\nVan harte gefeliciteerd, je bent geslaagd!`);
	  } else {
		output = `<p>\n\nJe cijfer gemiddelde is ${(cijfer.toFixed(1) / 10).toFixed(1)}\nHelaas, je bent niet geslaagd.</p>`;
		console.log(`\n\nJe cijfer gemiddelde is ${(cijfer.toFixed(1) / 10).toFixed(1)}\nHelaas, je bent niet geslaagd.`);
	  }
	}
  
	gemCijfer();
  </script>
  
  <style>
	/* voeg hier je stijlen toe indien nodig */
  </style>
  
  <div>
	{@html output}
  </div>
  