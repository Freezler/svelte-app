<script>
  import { sendEmail } from '$lib/index.js';
  import Avatar from 'svelte-avatar';

  function handleContactButtonClick() {
	// Call the sendEmail function here
	document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="mt-[50%] xs:mt-[10%] w-full md:w-[60%] mx-auto flex h-[240px] flex-col items-center justify-center bg-slate-400 bg-opacity-30 bg-cover text-center" id="home">
  <div class="flex flex-col gap-2">
	<div class="flex flex-col items-center justify-center">
	  <Avatar bgColor="hsla(234,100%,59%,0.3)" textColor="white" name="Randy de vries" src="https://ava" size="100px" />
	</div>
	<div>
	  <h1>RANDY</h1>
	  <p>responsieve hero sectie!!</p>
	</div>
	<div>
	  <button class="btn-hero hover:text-white hover:bg-black"  type="button">
		INFO
	  </button>
	  <button class="btn-hero hover:text-white hover:bg-black" on:click={handleContactButtonClick} type="button">
		CONTACT
	  </button>
	</div>
  </div>
</section>

<style>
</style>