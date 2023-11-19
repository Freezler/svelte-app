<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
	class="animate-slow-fade-in z-100 overflow-none mx-auto  flex h-[100%] w-[100%] flex-col items-center justify-around  text-center"
>
	<div
		class="  flex  w-[100%] gap-[20px] flex-col items-center    text-center"
	>
		<Avatar
			size="clamp(140px, 25vh, 350px)"
			initials="RV"
			bgColor="hsla(255,0%,0%,0.9)"
			textColor="white"
			name="Randy de vries"
			src="https://source.unsplash.com/random/700x700?human-face"
			class="filter hue-rotate-180 saturate-150 "
		/>
		<div
			class=" flex h-[screen] w-[100%]  flex-col place-content-center items-center justify-items-center rounded-[8px] bg-astral-900 bg-opacity-40 px-6 pb-8 pt-4 text-center drop-shadow-[2px_2px_12px_hsla(155,50%,59%,0.2)]"
		>
			<h3 class="font-mono font-[900] text-[clamp(20px,5vw,7rem)] text-blueone-200">
				<span class="font-handwriting text-xl text-redone-200">hi, I'm </span>RANDY
			</h3>
			<p
				class="type w-[110%] place-content-center -space-y-2 justify-self-center bg-opacity-20 text-center text-[clamp(13px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]"
			>
				<span>Welcome to my web project made with Svelte & TailwindCSS</span>
			</p>
		</div>
		<div
			class="grid  translate-y-[20px] grid-cols-2 place-content-center justify-items-between gap-4 place-self-center font-[900] text-astral-100 xs:translate-y-[30px] sm:translate-y-[10px]"
		>
		<button
		class="transition-colors  duration-700 ease-in-out  xxxs:scale-[0.95] xxs:scale-[1] xs:scale-[1] sm:scale-[1] md:scale-[.9] lg:scale-[1]  bg-astral-950 bg-opacity-70  text-center text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]   hover:bg-teal-500 text-white hover:text-purplethree-300 border-[1.6px] inline-block rounded-lg px-[clamp(8px,2vw,1.2rem)] py-[clamp(8px,2vw,1.2rem)] active:scale-[.99]  active:shadow-[1px_2px_2px_rgba(22,22,22,0.9)] shadow-[3px_3px_4px_rgba(22,22,22,0.9)] hover:bg-opacity-40" type="button" on:click={() => window.Avatar.reload()}
	>
		NEW IMG
	</button>
	<div class="relative inset-0 rounded-md translate-x-0 -translate-y-1 bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 z-10">
	<button
		class="transition-colors  duration-700 ease-in-out  xxxs:scale-[0.95] xxs:scale-[1] xs:scale-[1] sm:scale-[1] md:scale-[.9] lg:scale-[1]  bg-astral-950 bg-opacity-70  text-center text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]   hover:bg-teal-500 text-white hover:text-purplethree-300 border-[1.6px] border- inline-block rounded-lg px-[clamp(8px,2vw,1.2rem)] py-[clamp(8px,2vw,1.2rem)] active:scale-[.99]  active:shadow-[1px_2px_2px_rgba(22,22,22,0.9)] shadow-[3px_3px_4px_rgba(22,22,22,0.9)] hover:bg-opacity-40"
		on:click={sendEmail}
	>
	
		CONTACT
	</button>
</div>
		</div>
	</div>
</section>

<style>
	.type {
		display: inline-flex;
	}
	.type span {
		word-break: break-all;
		height: 1.2em;
		width: 0%;
		overflow: hidden;
		animation: t 8s linear alternate infinite;
	}
	.type span:before {
		content: ' ';
		display: inline-block;
	}
	@keyframes t {
		100%,
		100% {
			width: 115%;
		}
	}
  </style>