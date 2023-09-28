<script>
	import { onDestroy, onMount } from 'svelte';
	import ImgOverlay from '../components/Img-overlay.svelte';
	import Cards from '../components/Cards.svelte';
	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<div class="flex flex-col relative animate-slow-fade-in"
	<div class="blur-[0.7px] opacity-50 text-center relative z-20 animate-bounce">
		<div class=" flex justify-center flex-col items-center translate-y-[6.8rem] z-10">
			<span
				class="scale-150 inline-block w-4 h-4 border-t-4 rounded-l-4 border-[hsl(292,92%,53%)] border-w-4 border-r-4 transform rotate-[135deg]"
			/>
			<span
				class="scale-150 inline-block w-4 h-4 border-t-4 border-[hsl(292,92%,53%)] border-w-8 border-r-4 transform rotate-[135deg]"
			/>
			<span
				class="scale-150 inline-block w-4 h-4 border-t-4 border-[hsl(292,92%,53%)] border-w-8 border-r-4 transform rotate-[135deg]"
			/>
		</div>
	</div>
	<div class="relative">
		<svg
			version="1.1"
			class="h-72 -translate-x-32 -translate-y-16 ml-32 text-md font-semibold"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 500 500"
			width="100%"
			id="blobSvg"
			style="opacity: 1;"
			filter="blur(0.5px)"
			transform="rotate(31)"
		>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="30%" x2="0%" y2="100%">
					<stop offset="0%" style="stop-color: rgb(0, 255, 251);" />
					<stop offset="100%" style="stop-color: rgb(213, 128, 244);" />
				</linearGradient>
			</defs>
			<path id="blob" fill="url(#gradient)" style="opacity: 0.9;"
				><animate
					attributeName="d"
					dur="8s"
					repeatCount="indefinite"
					values="M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z"
				/></path
			></svg
		>
	</div>

