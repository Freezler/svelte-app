<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
  
	function handleContactButtonClick() {
	  // Call the sendEmail function here
	  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="absolute top-20  mx-auto w-[100%] md:w-[100%] filter blur-smooth contrast-600 z-100 -translate-y-[190px] sm:-translate-y-[190px] md:-translate-y-[220px] animate-slow-fade-in flex flex-col justify-center items-center text-center h-full">
	<div class="relative flex flex-col items-center justify-center">
		<Avatar bgColor="goldenrodyellow" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" size="calc(3rem + 10vw)" />
		<div class="bg-opacity-30 bg-purpleone-900 rounded-md flex flex-col items-center justify-center mt-[24px]">
			<h3 class="font-[500] text-xl text-yellow-500">
				<span class="font-display text-purpleone-400">hi I am,</span> RANDY
			</h3>
			<p class="bg-opacity-20 bg-purpleone-700 rounded-md text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] text-center w-[80%]">Welcome to my web project made with Svelte & TailwindCSS</p>
		</div>
		<div class="font-[500] mt-4 pb-4">
			<button class="text-[clamp(12px,2vw,20px)] bg-purpleone-200 py-1 px-2 md:py-2 md:px-6 rounded-md hover:text-white hover:bg-purpleone-400" type="button">
				INFO
			</button>
			<button class="text-[clamp(12px,2vw,20px)] bg-purpleone-200 py-1 px-2 md:py-2 md:px-6 rounded-md hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" on:click={handleContactButtonClick}  type="button">
				CONTACT
			</button>
		</div>
	</div>
</section>
