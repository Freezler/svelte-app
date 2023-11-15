<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
</script>

<section
	class="z-100 overflow-none mx-auto grid h-[100vh] w-[100vw] grid-cols-1 place-items-center justify-items-center text-center"
>
	<div
		class="  flex h-screen w-[100%] -translate-y-[50px] scale-100 flex-col items-center justify-center gap-4 text-center xs:scale-105 sm:scale-100 xxl:scale-100"
	>
		<Avatar
			size="clamp(80px, 20vw, 180px)"
			initials="RV"
			bgColor="hsla(245,110%,70%,0.4)"
			textColor="white"
			name="Randy de vries"
			src="https://source.unsplash.com/random/180/?fruit"
			class="filter:hue-rotate-180 bg-cover bg-center bg-no-repeat outline-[10px] outline-white"
		/>
		<div
			class="justify-items-center py-5 px-6  grid h-[screen] w-[max-content] grid-cols-1 place-content-center rounded-[8px] bg-purpleone-300 bg-opacity-50"
		>
			<h3 class=" text-[clamp(24px,2vw,5rem)] font-[500] text-blueone-200">
				<span class="font-sans text-redone-200 text-2xl">hi I am,</span> RANDY
			</h3>
			<p
				class="type w-[100%] place-content-center -space-y-2 justify-self-center bg-opacity-20 text-center text-[clamp(4px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]"
			>
				<span>Welcome to my web project made with Svelte & TailwindCSS</span>
			</p>
		</div>
		<div
			class="grid translate-y-[20px] grid-cols-2 place-content-center justify-items-center gap-4 place-self-center font-[900] xs:translate-y-[30px] sm:translate-y-[10px]"
		>
			<button
				class="hover:transition-duration-300 w-[100%] rounded-[4px] bg-purplethree-400 b px-2 py-2 text-[clamp(8px,3vw,16px)] text-purple-700 transition-colors duration-300 ease-in-out hover:bg-purpleone-400 hover:text-white hover:transition-colors md:px-6 md:py-2"
				type="button" on:click={() => window.location.reload()}
			>
				NEW IMG
			</button>
			<button
				class=" text-[clamp(8px,3vw,16px)] hover:transition-duration-700 w-[100%] rounded-[4px] bg-purplethree-200 px-[1px] py-2 text-purple-700 transition-colors duration-300 ease-in-out hover:bg-purpleone-400 hover:text-white hover:transition-colors md:px-2 md:py-2"
				on:click={sendEmail}
				type="button"
			>
				CONTACT
			</button>
		</div>
	</div>
</section>

<style>
	.type {
  display:inline-flex;
}
.type span {
  word-break: break-all;
  height: 1.2em;
  width:0%;
  overflow: hidden;
  animation: t 10s linear infinite alternate;
}
.type span:before {
  content:" ";
  display:inline-block;
}
@keyframes t{
  100%,100% {width:100%}
}
</style>
