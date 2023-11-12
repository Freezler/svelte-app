<script>
	import CijferlijstInput from '../../components/CijferlijstInput.svelte';
	import { onDestroy, onMount } from 'svelte';
	import Accordion
	onMount(() => console.log('Mounted Links page'));
	onDestroy(() => console.log('Unmounted Links page'));
	//  itmg cijferLijst Check
	const output = document.getElementById('output');
	const cijferLijst = [2.1, 9.3, 1.9, 6.7, 8, 6, 6, 7, 6, 3, 6, 9]; //  0 + 1 + 2 + 3 + 4 + 5
	const geslaagd = 6.5 * cijferLijst.length; //  gemiddelde van 6.5 om te slagen
	const indexEen = 0;

	function gemCijfer(cijferLijst) {
		const cijfer = cijferLijst.reduce((teller, tempCijfer) => teller + tempCijfer, indexEen);
		if (cijfer >= geslaagd) {
			output.innerHTML = `Je cijfer gemiddelde is ${
				cijfer.toFixed(1) / 10
			}\nVan harte gefeliciteerd, je bent geslaagd!`;
			console.log(
				`Je cijfer gemiddelde is ${
					cijfer.toFixed(1) / 10
				}\nVan harte gefeliciteerd, je bent geslaagd!`
			);
		} else {
			output.innerHTML = `<p>\n\nJe cijfer gemiddelde is ${
				cijfer.toFixed(1) / 10
			}\nHelaas, je bent niet geslaagd.</p>`;
			console.log(
				`\n\nJe cijfer gemiddelde is ${cijfer.toFixed(1)}\nHelaas, je bent niet geslaagd.`
			);
		}
	}

	gemCijfer(cijferLijst);
</script>

<main
	class=" z-100 flex h-screen w-screen flex-col items-center justify-center overflow-scroll scroll-smooth bg-gradient-to-b from-astral-900 via-gray-900 to-astral-900 pb-24"
>
	<div class="flex h-screen w-[100%] flex-col items-center justify-center font-sans">
		<h1
			class="xl:8xl animate-slow-slide-down text-3xl text-purpleone-300 sm:text-5xl md:text-6xl"
		>
			Perpetual Learning!
		</h1>
		<p
			class="xl:2xl text-purpleone600 animate-slow-slide-up border-b-[1px] border-purpleone-300 text-xs text-white sm:text-[16px] md:text-xl"
		>
			For this project i'm using the following languages and frameworks:
		</p>
		<Accordion />
	</div>
	<CijferlijstInput />
	<div id="output"></div>
</main>
