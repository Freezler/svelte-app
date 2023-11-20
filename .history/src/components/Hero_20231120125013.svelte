<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
	class="z-100 overflow-none bg-[oklch(12.5%_0.057_322.41)]bg-opacity-40 flex h-[100%] w-screen animate-slow-fade-in flex-col items-center justify-center overflow-hidden text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)]"
>
	<div class="h-[60%] w-[100%] flex-col">
		<div class="m-0 flex h-[100%] w-[100%] items-start justify-center p-0">
			<Avatar
				size="clamp(140px, 15vw, 180px)"
				initials="RV"
				textColor="white"
				name="Randy de vries"
				src="https://source.unsplash.com/560x560/?human"
			/>
		</div>
		<div class="flex h-[100vh] w-[100%] flex-col items-center justify-center">
			<div
				class="z-100 m flex w-[100%] animate-slow-slide-down
				 items-center justify-center bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-60 drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)] sm:flex-col lg:h-[320px]"
			>
				<h3
					class=" 
					font-Poppins animate-slow-slide-down bg-[url(https://source.unsplash.com/1920x1080/?winter)] bg-cover bg-clip-text bg-center bg-no-repeat text-center
				  text-[clamp(32px,20vw,11rem)] font-[600] text-transparent drop-shadow-[1px_1px_12px_rgba(245,52,445,0.4)]"
				>
					<span
						class="box-border flex h-[max-content] w-[90px] translate-x-4 items-center place-self-center font-display text-[clamp(8px,4vw,2rem)] font-[100] text-blueone-300 text-shadow-[1px_1px_5px_rgba(25,292,445,0.9)]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" z-100 h-[calc(50vh-300px)] w-[100%] animate-slow-slide-down flex-col items-center justify-center justify-items-end bg-astral-900 bg-opacity-50 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.2)]"
			>
				<p
					class="type font-Poppins justify-items-evenly w-[max-content] animate-slow-fade-in
					bg-opacity-20 text-left align-middle text-[clamp(12px,3vw,1.6rem)] font-[500] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]"
				>
					<span class="">Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
			</div>
		</div>
	</div>
	<!-- buttons start here!! -->
	<div class="z-400 mx-auto flex h-[100px] flex-row items-center justify-center">
		<button class="h-[30px] w-[80px] rounded-[12px] bg-blue-400  duration-300 hover:bg-blue-200">
			refresh
		</button>

		<button type="button" class="h-[30px] w-[80px] rounded-[8px] bg-blue-400 " on:click={sendEmail} >
			Contact
		</button>
	</div>
</section>

<style>
	* {
		/* font-family: 'Poppins', sans-serif; */
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
	}

	.type {
		display: inline-flex;
		margin-left: 1rem;
	}
	.type span {
		word-break: break-all;
		height: 2rem;
		line-height: 2.3rem;
		width: 0;
		overflow: hidden;
		animation: t 9s steps(70, end) infinite alternate both;
		text-align: left;
		letter-spacing: 1.6px;
	}
	.type span:before {
		content: ' ';
		display: inline-block;
		margin-bottom: 5rem;
	}
	@keyframes t {
		100%,
		100% {
			width: 115%;
		}
	}
</style>
