<!-- CijferLijstCheck.svelte -->
<script>
    export let fileContent = "";
    let output = "";
  
    const geslaagd = 6.5 * 12; // 12 is de lengte van de cijferLijst
  
    function gemCijfer() {
      const cijferLijst = fileContent.split(',').map(item => parseFloat(item.trim()));
  
      const cijfer = cijferLijst.reduce((teller, tempCijfer) => teller + tempCijfer, 0);
  
      if (cijfer >= geslaagd) {
        output = `Je cijfer gemiddelde is ${(cijfer.toFixed(1) / 12).toFixed(1)}\nVan harte gefeliciteerd, je bent geslaagd!`;
      } else {
        output = `<p>\n\nJe cijfer gemiddelde is ${(cijfer.toFixed(1) / 12).toFixed(1)}\nHelaas, je bent niet geslaagd.</p>`;
      }
    }
  
    gemCijfer();
  </script>
  
  <style>
    /* voeg hier je stijlen toe indien nodig */
  </style>
  
  <