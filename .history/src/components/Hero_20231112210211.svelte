<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
	const randomN
	
</script>

<section class="mx-auto w-[100%] md:w-[20%]  z-100 flex flex-col  items-center overflow-none text-center h-screen  justify-center">
	<div class="-translate-y-[60px] h-screen  flex  w-[100%] flex-col justify-center items-center">
		<Avatar  size="clamp(130px, 5vw, 200px)" initials="RV" bgColor="hsla(245,110%,70%,0.4)" textColor="white" name="Randy de vries" src="https://randomuser.me/api/portraits/men/99.jpg" />
		<div class="] bg-opacity-50 rounded-md mb-4 translate-y-[12px] ">
			<h3 class=" font-[500] text-[clamp(8px,10vw,4rem] text-blueone-200">
				<span class="font-sans text-redone-200">hi I am,</span> RANDY
			</h3>
			<p class="bg-opacity-20 bg-purpleone-700 text-[clamp(4px,4vw,3rem] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] text-center w-[100%]">Welcome to my web project made with Svelte & TailwindCSS</p>
		</div>
		<div class="font-[900]  pb-4  grid grid-cols-2 gap-2 place-content-center justify-items-center place-self-center translate-y-[20px]">
			<button class="w-[100px] text-[clamp(12px,2vw,20px)] text-purple-700 bg-purplethree-200 py-2 px-2 md:py-2 md:px-6 rounded-[4px] hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" type="button">
				Next IMG
			</button>
			<button  class=" w-[100px] text-[clamp(12px,2vw,20px)] text-purple-700 bg-purplethree-200 py-2 px-[1px] md:py-2 md:px-2 rounded-[4px] hover:text-white hover:bg-purpleone-400 transition-colors duration-300 hover:transition-colors hover:transition-duration-300 ease-in-out" on:click={sendEmail}  type="button">
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