<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Links page'));
	onDestroy(() => console.log('Unmounted Links page'));
	import ScrollBlob from '../../components/scrollBlob.svelte';
</script>

<main
	class="flex h-screen w-screen flex-col bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900"
>
	<div class="flex flex-col">
		<ScrollBlob />
	

	<div class="z-50 mx-auto w-[70%] bg-transparent p-4">
		<h1 class="mb-4 text-3xl font-bold">
			Introductie tot het manipuleren van HTML en CSS met JavaScript
		</h1>

		<p class="mb-4 text-lg">
			In dit artikel gaan we het hebben over hoe je JavaScript kunt gebruiken om te spelen met
			de structuur en stijl van een HTML-pagina. Je leert hoe je interactie kunt hebben met
			HTML-elementen en hoe je je webpagina interactiever kunt maken.
		</p>

		<h2 class="mb-2 text-2xl font-semibold">Kennismaking met het DOM</h2>
		<p>
			Het Document Object Model (DOM) is als een boomstructuur die de structuur en inhoud van
			een HTML-document weergeeft. Elk stukje van je HTML-document, zoals elementen,
			attributen en tekst, wordt voorgesteld als een knooppunt (node) in deze boom.
		</p>

		<h2 class="mb-2 text-2xl font-semibold">Begrijpen van DOM-elementen</h2>
		<ul>
			<li>Document: Dit is het hoogste niveau en de toegangspoort tot de DOM-boom.</li>
			<li>
				Element: Vertegenwoordigt een HTML-element en hiermee kun je eigenschappen, stijlen
				en inhoud aanpassen.
			</li>
			<li>
				Node: De basisstructuur voor alle soorten knooppunten in de DOM-boom, zoals
				elementen, tekst en opmerkingen.
			</li>
		</ul>

		<h2 class="mb-2 text-2xl font-semibold">Event Handling</h2>
		<p>
			De DOM biedt een systeem om gebruikersinteracties en andere gebeurtenissen te
			behandelen. Je kunt gebeurtenisluisteraars aan elementen toevoegen om te reageren op
			acties zoals klikken, toetsaanslagen en muisbewegingen.
		</p>

		<h2 class="mb-2 text-2xl font-semibold">Voorbeeld van DOM-manipulatie</h2>
		<p>
			We geven je een eenvoudig HTML-voorbeeld met JavaScript-code, waarmee we laten zien hoe
			je de DOM kunt manipuleren. We maken gebruik van methoden zoals getElementById,
			innerHTML en style om de inhoud en stijl van HTML-elementen dynamisch te veranderen.
		</p>

		<h2 class="mb-2 text-2xl font-semibold">Websites interactiever maken</h2>
		<p>
			Dit artikel toont ook hoe je met JavaScript veranderingen op een HTML-pagina kunt
			activeren als reactie op gebruikersacties. We definiëren twee JavaScript-functies,
			showMessage en changeColor, die we aanroepen vanuit HTML-elementen met behulp van de
			onclick-eigenschap.
		</p>

		<h2 class="mb-2 text-2xl font-semibold">Handige methoden en attributen</h2>
		<ul>
			<li>document.getElementById()</li>
			<li>document.getElementsByClassName()</li>
			<li>document.getElementsByTagName()</li>
			<li>document.querySelector()</li>
			<li>document.querySelectorAll()</li>
			<li>innerHTML, setAttribute()</li>
			<li>removeAttribute()</li>
			<li>classList, classList.add(), classList.remove(), classList.toggle()</li>
			<li>onClick, onMouseOver, onMouseOut</li>
		</ul>

		<p class="mt-4">
			Dit was een korte introductie tot DOM-elementen, waarbij je een idee hebt gekregen van
			hoe je de inhoud en stijl van HTML-elementen kunt aanpassen. Je hebt ook gezien hoe je
			je website interactiever kunt maken. Veel succes met je ontwikkelingsavontuur!
		</p>
	</div>
	</div>
</main>
