<script>
	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>


<main
	class="flex  h-[flex-col  min-h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat w-screen h-full items-center justify-center  text-3xl text-center"
>
	<div
		class="mt-[7.5rem] [&>*]:border-purplethree-400 [&>*]:border-[1px] [&>*]:drop-shadow-[-1px_3px_4px_hsla(25,60%,150%,0.5)] [&>*]:rounded-[12px] text-2xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 items-center"
	>
		<div
			class="bg-purpleone-50  w-60 h-40 justify-center rounded-xl flex items-center font-mono"
		>
			bg-blueone-50
		</div>
		<div class="bg-blueone-100 square-md w-60 h-40 rounded-xl flex items-center justify-center font-display">
			bg-blueone-100
		</div>
		<div class="bg-blueone-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-200
		</div>
		<div class="bg-blueone-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-300
		</div>
		<div class="bg-blueone-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-400
		</div>
		<div class="bg-blueone-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-500
		</div>
		<div class="bg-blueone-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-600
		</div>
		<div class="bg-blueone-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-700
		</div>
		<div class="bg-blueone-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-800
		</div>
		<div class="bg-blueone-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-900
		</div>
		<div class="bg-blueone-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-blueone-950
		</div>

		<!-- Blue Two Shades -->
		<div class="bg-bluetwo-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-50
		</div>
		<div class="bg-bluetwo-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-100
		</div>
		<div class="bg-bluetwo-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-200
		</div>
		<div class="bg-bluetwo-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-300
		</div>
		<div class="bg-bluetwo-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-400
		</div>
		<div class="bg-bluetwo-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-500
		</div>
		<div class="bg-bluetwo-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-600
		</div>
		<div class="bg-bluetwo-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-700
		</div>
		<div class="bg-bluetwo-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-800
		</div>
		<div class="bg-bluetwo-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-900
		</div>
		<div class="bg-bluetwo-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-bluetwo-950
		</div>

		<!-- Blue Three Shades -->
		<div
			class="bg-bluethree-50 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-50
		</div>
		<div
			class="bg-bluethree-100 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-100
		</div>
		<div
			class="bg-bluethree-200 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-200
		</div>
		<div
			class="bg-bluethree-300 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-300
		</div>
		<div
			class="bg-bluethree-400 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-400
		</div>
		<div
			class="bg-bluethree-500 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-500
		</div>
		<div
			class="bg-bluethree-600 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-600
		</div>
		<div
			class="bg-bluethree-700 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-700
		</div>
		<div
			class="bg-bluethree-800 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-800
		</div>
		<div
			class="bg-bluethree-900 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-900
		</div>
		<div
			class="bg-bluethree-950 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-bluethree-950
		</div>

		<!-- Astral Shades -->
		<div class="bg-astral-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-50
		</div>
		<div class="bg-astral-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-100
		</div>
		<div class="bg-astral-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-200
		</div>
		<div class="bg-astral-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-300
		</div>
		<div class="bg-astral-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-400
		</div>
		<div class="bg-astral-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-500
		</div>
		<div class="bg-astral-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-600
		</div>
		<div class="bg-astral-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-700
		</div>
		<div class="bg-astral-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-800
		</div>
		<div class="bg-astral-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-900
		</div>
		<div class="bg-astral-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-astral-950
		</div>

		<!-- Green Shades -->
		<div class="bg-greenone-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greenone-50
		</div>
		<div
			class="bg-greenone-100 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-100
		</div>
		<div
			class="bg-greenone-200 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-200
		</div>
		<div
			class="bg-greenone-300 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-300
		</div>
		<div
			class="bg-greenone-400 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-400
		</div>
		<div
			class="bg-greenone-500 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-500
		</div>
		<div
			class="bg-greenone-600 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-600
		</div>
		<div
			class="bg-greenone-700 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-700
		</div>
		<div
			class="bg-greenone-800 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-800
		</div>
		<div
			class="bg-greenone-900 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-900
		</div>
		<div
			class="bg-greenone-950 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenone-950
		</div>

		<!-- Green Two Shades -->
		<div class="bg-greentwo-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greentwo-50
		</div>
		<div
			class="bg-greentwo-100 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-100
		</div>
		<div
			class="bg-greentwo-200 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-200
		</div>
		<div
			class="bg-greentwo-300 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-300
		</div>
		<div
			class="bg-greentwo-400 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-400
		</div>
		<div
			class="bg-greentwo-500 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-500
		</div>
		<div
			class="bg-greentwo-600 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-600
		</div>
		<div
			class="bg-greentwo-700 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-700
		</div>
		<div
			class="bg-greentwo-800 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-800
		</div>
		<div
			class="bg-greentwo-900 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-900
		</div>
		<div
			class="bg-greentwo-950 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greentwo-950
		</div>

		<!-- Green Three Shades -->
		<div
			class="bg-greenthree-50 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-50
		</div>
		<div
			class="bg-greenthree-100 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-100
		</div>
		<div
			class="bg-greenthree-200 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-200
		</div>
		<div
			class="bg-greenthree-300 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-300
		</div>
		<div
			class="bg-greenthree-400 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-400
		</div>
		<div
			class="bg-greenthree-500 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-500
		</div>
		<div
			class="bg-greenthree-600 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-600
		</div>
		<div
			class="bg-greenthree-700 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-700
		</div>
		<div
			class="bg-greenthree-800 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-800
		</div>
		<div
			class="bg-greenthree-900 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-900
		</div>
		<div
			class="bg-greenthree-950 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-greenthree-950
		</div>

		<!-- Rose Shades -->
		<div class="bg-roseone-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-50
		</div>
		<div class="bg-roseone-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-100
		</div>
		<div class="bg-roseone-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-200
		</div>
		<div class="bg-roseone-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-300
		</div>
		<div class="bg-roseone-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-400
		</div>
		<div class="bg-roseone-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-500
		</div>
		<div class="bg-roseone-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-600
		</div>
		<div class="bg-roseone-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-700
		</div>
		<div class="bg-roseone-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-800
		</div>
		<div class="bg-roseone-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-900
		</div>
		<div class="bg-roseone-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-roseone-950
		</div>

		<!-- Purple Shades -->
		<div
			class="bg-purpleone-50 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-50
		</div>
		<div
			class="bg-purpleone-100 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-100
		</div>
		<div
			class="bg-purpleone-200 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-200
		</div>
		<div
			class="bg-purpleone-300 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-300
		</div>
		<div
			class="bg-purpleone-400 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-400
		</div>
		<div
			class="bg-purpleone-500 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-500
		</div>
		<div
			class="bg-purpleone-600 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-600
		</div>
		<div
			class="bg-purpleone-700 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-700
		</div>
		<div
			class="bg-purpleone-800 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-800
		</div>
		<div
			class="bg-purpleone-900 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-900
		</div>
		<div
			class="bg-purpleone-950 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpleone-950
		</div>

		<!-- Purple Two Shades -->
		<div
			class="bg-purpletwo-50 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-50
		</div>
		<div
			class="bg-purpletwo-100 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-100
		</div>
		<div
			class="bg-purpletwo-200 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-200
		</div>
		<div
			class="bg-purpletwo-300 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-300
		</div>
		<div
			class="bg-purpletwo-400 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-400
		</div>
		<div
			class="bg-purpletwo-500 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-500
		</div>
		<div
			class="bg-purpletwo-600 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-600
		</div>
		<div
			class="bg-purpletwo-700 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-700
		</div>
		<div
			class="bg-purpletwo-800 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-800
		</div>
		<div
			class="bg-purpletwo-900 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-900
		</div>
		<div
			class="bg-purpletwo-950 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purpletwo-950
		</div>

		<!-- Purple Three Shades -->
		<div
			class="bg-purplethree-50 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-50
		</div>
		<div
			class="bg-purplethree-100 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-100
		</div>
		<div
			class="bg-purplethree-200 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-200
		</div>
		<div
			class="bg-purplethree-300 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-300
		</div>
		<div
			class="bg-purplethree-400 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-400
		</div>
		<div
			class="bg-purplethree-500 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-500
		</div>
		<div
			class="bg-purplethree-600 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-600
		</div>
		<div
			class="bg-purplethree-700 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-700
		</div>
		<div
			class="bg-purplethree-800 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-800
		</div>
		<div
			class="bg-purplethree-900 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-900
		</div>
		<div
			class="bg-purplethree-950 square-md w-60 h-40 rounded-xl flex items-center justify-center"
		>
			bg-purplethree-950
		</div>
		<!-- Rosetwo Shades -->
		<div class="bg-rosetwo-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-50
		</div>
		<div class="bg-rosetwo-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-100
		</div>
		<div class="bg-rosetwo-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-200
		</div>
		<div class="bg-rosetwo-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-300
		</div>
		<div class="bg-rosetwo-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-400
		</div>
		<div class="bg-rosetwo-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-500
		</div>
		<div class="bg-rosetwo-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-600
		</div>
		<div class="bg-rosetwo-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-700
		</div>
		<div class="bg-rosetwo-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-800
		</div>
		<div class="bg-rosetwo-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-900
		</div>
		<div class="bg-rosetwo-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-rosetwo-950
		</div>

		<!-- Redone Shades -->
		<div class="bg-redone-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-50
		</div>
		<div class="bg-redone-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-100
		</div>
		<div class="bg-redone-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-200
		</div>
		<div class="bg-redone-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-300
		</div>
		<div class="bg-redone-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-400
		</div>
		<div class="bg-redone-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-500
		</div>
		<div class="bg-redone-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-600
		</div>
		<div class="bg-redone-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-700
		</div>
		<div class="bg-redone-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-800
		</div>
		<div class="bg-redone-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-900
		</div>
		<div class="bg-redone-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redone-950
		</div>

		<!-- Redtwo Shades -->
		<div class="bg-redtwo-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-50
		</div>
		<div class="bg-redtwo-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-100
		</div>
		<div class="bg-redtwo-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-200
		</div>
		<div class="bg-redtwo-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-300
		</div>
		<div class="bg-redtwo-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-400
		</div>
		<div class="bg-redtwo-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-500
		</div>
		<div class="bg-redtwo-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-600
		</div>
		<div class="bg-redtwo-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-700
		</div>
		<div class="bg-redtwo-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-800
		</div>
		<div class="bg-redtwo-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-900
		</div>
		<div class="bg-redtwo-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-redtwo-950
		</div>

		<!-- Greyone Shades -->
		<div class="bg-greyone-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-50
		</div>
		<div class="bg-greyone-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-100
		</div>
		<div class="bg-greyone-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-200
		</div>
		<div class="bg-greyone-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-300
		</div>
		<div class="bg-greyone-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-400
		</div>
		<div class="bg-greyone-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-500
		</div>
		<div class="bg-greyone-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-600
		</div>
		<div class="bg-greyone-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-700
		</div>
		<div class="bg-greyone-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-800
		</div>
		<div class="bg-greyone-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-900
		</div>
		<div class="bg-greyone-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greyone-950
		</div>

		<!-- Greytwo Shades -->
		<div class="bg-greytwo-50 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-50
		</div>
		<div class="bg-greytwo-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-100
		</div>
		<div class="bg-greytwo-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-200
		</div>
		<div class="bg-greytwo-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-300
		</div>
		<div class="bg-greytwo-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-400
		</div>
		<div class="bg-greytwo-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-500
		</div>
		<div class="bg-greytwo-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-600
		</div>
		<div class="bg-greytwo-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-700
		</div>
		<div class="bg-greytwo-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-800
		</div>
		<div class="bg-greytwo-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-900
		</div>
		<div class="bg-greytwo-950 square-md w-60 h-40 rounded-xl flex items-center justify-center">
			bg-greytwo-950
		</div>
	</div>
</main>

