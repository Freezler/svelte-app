<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
  
	function handleContactButtonClick() {
	  // Call the sendEmail function here
	  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="mx-auto w-[75%] md:w-[60%]  z-100 grid grid-cols-1 overflow-scroll text-center h-[200px] ">
	<div class="h-screen  grid grid-cols-1  w-[100%] border-blueone-200 border-2 place-items-center place-content-around">
		<Avatar  size="120px" initials="RV" bgColor="hsla(245,110%,70%,0.4)" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" />
		<div class="bg-opacity-50 rounded-md flex flex-col items-center justify-center mt-[50px]">
			<h3 class="font-[500] text-2xl text-blueone-200">
				<span class="font-sans text-redone-200">hi I am,</span> RANDY
			</h3>
			<p class="bg-opacity-20 bg-purpleone-700 rounded-md text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] text-center w-[80%]">Welcome to my web project made with Svelte & TailwindCSS</p>
		</div>
		<div class="font-[900] mt-[30px] pb-4 gap-2 flex">
			<button class="w-[100px] text-[clamp(8px,2vw,20px)] text-purple-700 bg-purplethree-200 py-2 px-2 md:py-2 md:px-6 rounded-[4px] hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" type="button">
				INFO
			</button>
			<button class="w-[100px] text-[clamp(8px,2vw,20px)] text-purple-700 bg-purplethree-200 py-2 px-[1px] md:py-2 md:px-2 rounded-[4px] hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" on:click={sendEmail}  type="button">
				CONTACT
			</button>
		</div>
	</div>
</section>
