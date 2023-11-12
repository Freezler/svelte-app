<script>
    impo
    export let fileContent = "";
    let output = "";
  
    function gemCijfer() {
      const cijferLijst = fileContent.split(',').map(item => parseFloat(item.trim()));
      const geslaagd = 6.5 * cijferLijst.length;
  
      const cijfer = cijferLijst.reduce((teller, tempCijfer) => teller + tempCijfer, 0);
  
      if (cijfer >= geslaagd) {
        output = `Je cijfer gemiddelde is ${(cijfer.toFixed(1) / cijferLijst.length).toFixed(1)}\nVan harte gefeliciteerd, je bent geslaagd!`;
      } else {
        output = `<p>\n\nJe cijfer gemiddelde is ${(cijfer.toFixed(1) / cijferLijst.length).toFixed(1)}\nHelaas, je bent niet geslaagd.</p>`;
      }
    }
  
    onMount(() => {
      if (fileContent.trim() !== "") {
        gemCijfer();
      }
    });
  </script>