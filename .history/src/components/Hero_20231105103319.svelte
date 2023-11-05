<script>
  import { sendEmail } from '$lib/index.js';
  import Avatar from 'svelte-avatar';

  function handleContactButtonClick() {
	// Call the sendEmail function here
	document.getElementById('contact').scrollIntoView({ behavior: 'fade' });
  }
</script>


<section class="mt-[10%] sm:mt-[5%] md:mt-[10%] lg:mt-[5%] xl:mt-[0px] w-full md:w-[60%] mx-auto flex h-[300px] flex-col items-center justify-center bg-slate-400 bg-opacity-30 bg-cover text-center" id="home">
  <div class="flex flex-col gap-2">
	<div class="animate-slow-fade-in flex flex-col items-center justify-center">
	  <Avatar bgColor="hsla(234,100%,59%,0.3)" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" size="180px" />
	</div>
	<div>
	  <h1 class="text-3xl"><span class="text-purpleone-200 text-[16]"><small>hi I'am, </small></span>RANDY</h1>
	  <p>responsieve hero sectie!!</p>
	</div>
	<div>
	  <button class="bg-purpleone-200 py-1 px-2 rounded-md hover:text-white hover:bg-black"  type="button">
		INFO
	  </button>
	  <button class="bg-purpleone-200 py-1 px-2 rounded-md hover:text-white hover:bg-black" on:click={handleContactButtonClick} type="button">
		CONTACT
	  </button>
	</div>
  </div>
</section>

<style>
</style>
