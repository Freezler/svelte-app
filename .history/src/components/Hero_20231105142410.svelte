<script>
  import { sendEmail } from '$lib/index.js';
  import Avatar from 'svelte-avatar';

  function handleContactButtonClick() {
	// Call the sendEmail function here
	document.getElementById('contact').scrollIntoView({ behavior: 'fade' });
  }
</script>


<section class=" animate-slow-fade-in grid place-items-center  w-full md:w-[50%] mx-auto  h-[200px] bg-slate-400 bg-opacity-30 bg-cover text-center">
  <div class="flex flex-col relative gap-8">
	<div class="-translate-y-[50%] animate-slow-fade-in flex flex-col items-center  justify-start ">
	  <Avatar bgColor="hsla(234,100%,59%,0.3)" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" size="calc(20vh - 40px)" />
	</div>
	<div class="flex flex-col   items-center justify-center	">
	  <h3 class="font-[500] text-xl text-red-300"><span class="text-purpleone-100 font-display">hi I'am,</span>RANDY</h3>
	  <p class="text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] w-[80%] text-center">Welcome to my webproject made with Svelte & TailwindCSS</p>
	</div>
	<div class="font-[500] ">
	  <button class="text-[12px] bg-purpleone-200 py-1 px-2 rounded-md hover:text-white hover:bg-black"  type="button">
		INFO
	  </button>
	  <button class="text-[12px] bg-purpleone-200 py-1 px-2 rounded-md hover:text-white hover:bg-black" on:click={handleContactButtonClick} type="button">
		CONTACT
	  </button>
	</div>
  </div>
</section>

<style>
</style>
