<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
  
	function handleContactButtonClick() {
	  // Call the sendEmail function here
	  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="absolute top-[10%] xxs:top-[20%] md:top-[20%] xl:top-[20%] mx-auto w-[100%] md:w-[100%] filter contrast-400 z-100 -translate-y-[190px] sm:-translate-y-[190px] md:-translate-y-[220px]  flex flex-col justify-center items-center text-center h-full">
	<div class="relative grid grid-cols-1 al">
		<Avatar bgColor="goldenrodyellow" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" size="200px" />
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
