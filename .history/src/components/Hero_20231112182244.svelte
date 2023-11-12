<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
  
	function handleContactButtonClick() {
	  // Call the sendEmail function here
	  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
	}

	function handleProjectsButtonClick() {
		// ## handleImgClick
		
	}
</script>

<section class="mx-auto w-[100%] md:w-[20%]  z-100 flex flex-col  items-center overflow-none text-center h-screen  justify-center">
	<div class="-translate-y-[50px] h-screen  flex  w-[100%] flex-col justify-center items-center">
		<Avatar  size="clamp(100px, 5vw, 200px)" initials="RV" bgColor="hsla(245,110%,70%,0.4)" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" />
		<div class="] bg-opacity-50 rounded-md  ">
			<h3 class="font-[500] text-[clamp(8px,10vw,4rem] text-blueone-200">
				<span class="font-sans text-redone-200">hi I am,</span> RANDY
			</h3>
			<p class="bg-opacity-20 bg-purpleone-700 text-[clamp(4px,4vw,3rem] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] text-center w-[100%]">Welcome to my web project made with Svelte & TailwindCSS</p>
		</div>
		
	</div>
</section>
<style>
	* {
		scroll-behavior: smooth;
		margin: 0%;
		padding: 0%;	
	}
</style>