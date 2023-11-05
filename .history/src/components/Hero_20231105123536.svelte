<script>
  import { sendEmail } from '$lib/index.js';
  import Avatar from 'svelte-avatar';

  function handleContactButtonClick() {
	// Call the sendEmail function here
	document.getElementById('contact').scrollIntoView({ behavior: 'fade' });
  }
</script>


<section class="mb-[10%] pb-[1rem] animate-slow-fade-in  sm:mt-[5%] md:mt-[5%] lg:mt-[5%] xl:mt-[5%] w-full md:w-[50%] mx-auto flex h-full flex-col items-center justify-start bg-slate-400 bg-opacity-30 bg-cover text-center">
  <div class="flex flex-col gap-2">
	<div class="animate-slow-fade-in flex flex-col items-center justify-start -translate-y-1/2">
	  <Avatar bgColor="hsla(234,100%,59%,0.3)" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" size="calc(20vh - 20px)" />
	</div>
	<div>
	  <h3 class=" font-[900] text-red-300"><span class="text-purpleone-200">hi I'am,</span>RANDY</h3>
	  <p>Welcome to my webproject made with Svelte & TailwindCSS</p>
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
