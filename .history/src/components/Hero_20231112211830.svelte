<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	
</script>

<section class="mx-auto w-[100%] md:w-[20%]  z-100 flex flex-col  items-center overflow-none text-center h-screen  justify-center">
	<div class="-translate-y-[60px] h-screen  flex flex-col w-[100%]  justify-center text-center items-center gap-2">
		<Avatar  size="clamp(200px, 4vw, 400px)" initials="RV" bgColor="hsla(245,110%,70%,0.4)" textColor="white" name="Randy de vries" src="https://randomuser.me/api/portraits/non/{randomNumber}.jpg" />
			<div class=" bg-opacity-50 bg-purpleone-700  backdrop-sepia mb-4 translate-y-[12px] my-[4rem] ">
				<h3 class=" font-[500] text-[clamp(16px,2vw,5rem)] text-blueone-200">
				<span class="font-sans text-redone-200">hi I am,</span> RANDY
			</h3>
			<p class="bg-opacity-20 text-[clamp(4px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]  mx-auto text-center w-[80%]">Welcome to my web project made with Svelte & TailwindCSS</p>
		</div>
		<div class="gap-4 font-[900] text-[clamp(12px,2vw,20px)]  grid grid-cols-2 place-content-center justify-items-center place-self-center translate-y-[20px]">
			<button class="w-[120px] text-[clamp(8px,2vw,16px)] text-purple-700 bg-purplethree-200 py-2 px-2 md:py-2 md:px-6 rounded-[4px] hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" type="button">
				new avatar
			</button>
			<button  class=" w-[120px] text-[clamp(8px,2vw,16px)] text-purple-700 bg-purplethree-200 py-2 px-[1px] md:py-2 md:px-2 rounded-[4px] hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" on:click={sendEmail}  type="button">
				CONTACT
			</button>
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