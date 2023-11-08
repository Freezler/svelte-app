<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
  
	function handleContactButtonClick() {
	  // Call the sendEmail function here
	  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="absolute top-[10%] xxs:top-[20%] md:top-[20%] xl:top-[20%] mx-auto w-[100%] md:w-[100%] filter contrast-400 z-100 -translate-y-[190px] sm:-translate-y-[190px] md:-translate-y-[220px]  flex flex-col justify-center items-center text-center h-full">
	<div class="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center">
		<Avatar bgColor="goldenrodyellow" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" size="200px" />
		<svg
		version="1.1"
		class=" h-[300px] md:h-[500px]   opacity-50"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 300 300"
		width="100%"
		id="blobSvg"
		style="opacity: 1;"
		filter="blur(0.5px)"
		transform="rotate(31)"
	>
		<defs>
			<linearGradient id="gradient" x1="0%" y1="30%" x2="0%" y2="100%">
				<stop offset="0%" style="stop-color: orange;" />
				<stop offset="100%" style="stop-color: red;" />
			</linearGradient>
		</defs>
		<path id="blob" fill="url(#gradient)" style="opacity: 0.9;">
			<animate
				attributeName="d"
				dur="8s"
				repeatCount="indefinite"
				values="M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z"
			/></path
		></svg
	>Û
		<div class="bg-opacity-50 bg-purpleone-900 rounded-md flex flex-col items-center justify-center mt-[24px]">
			<h3 class="font-[500] text-2xl text-blueone-200">
				<span class="font-sans text-redone-200">hi I am,</span> RANDY
			</h3>
			<p class="bg-opacity-20 bg-purpleone-700 rounded-md text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] text-center w-[80%]">Welcome to my web project made with Svelte & TailwindCSS</p>
		</div>
		<div class="font-[500] mt-4 pb-4">
			<button class="text-[clamp(12px,2vw,20px)] text-purple-700 bg-purplethree-200 py-1 px-2 md:py-2 md:px-6 rounded-md hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" type="button">
				INFO
			</button>
			<button class="text-[clamp(12px,2vw,20px)] text-purple-700 bg-purplethree-200 py-1 px-2 md:py-2 md:px-6 rounded-md hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" on:click={sendEmail}  type="button">
				CONTACT
			</button>
		</div>
	</div>
</section>
