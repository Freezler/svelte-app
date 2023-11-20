<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
	import TiRefresh from 'svelte-icons/ti/TiRefresh.svelte'
</script>

<section
	class="z-100 overflow-none -translate-y-10 bg-[oklch(12.5%_0.057_322.41)]bg-opacity-40 flex h-[100vh] w-screen animate-slow-fade-in flex-col items-center justify-center overflow-hidden text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)]"
>
	<div class="h-[clamp(220px, 20vw, 250px] w-[100%] flex-col">
		<div class="animate-slow-fade-in m-0 flex max-h-[content] md:h-[1005] md:translate-y-10 lg:translate-y-[52px] w-[100%] items-start justify-center">
			<Avatar
				size="clamp(140px, 20vw, 180px)"
				initials="RV"
				textColor="white"
				name="Randy de vries"
				src="https://source.unsplash.com/300x300/?perspective"
				style="margin-bottom: 50px;"
				
				
				alt="Randy de vries"
				
			/>
		</div>
		<div class="flex   flex-col items-center justify-center">
			<div
				class="z-100  flex w-[100%] animate-slow-fade-in flex-col
				 items-center justify-evenly bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-60 drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)] sm:flex-col lg:h-[320px]"
			>
				<h3
					class=" 
					font-Poppins animate-slow-slide-down bg-[url(https://source.unsplash.com/1920x1080/?batman)] bg-cover bg-clip-text bg-center bg-no-repeat text-center
				  text-[clamp(32px,20vw,11rem)] font-[600] text-transparent drop-shadow-[1px_1px_12px_rgba(245,52,445,0.4)]"
				>
					<span
						class="box-border flex h-[max-content] w-[90px] translate-x-4 items-center place-self-center font-display text-[clamp(8px,4vw,2rem)] font-[100] text-blueone-300 text-shadow-[1px_1px_5px_rgba(25,292,445,0.9)]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" z-100 h-[35%] w-[100%] animate-slow-slide-down flex-col items-center justify-center justify-items-end bg-astral-900 bg-opacity-50 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.2)]"
			>
				<p
					class="type ml-8 font-Poppins justify-items-evenly  animate-slow-slide-in-rtl w-[content] flex justify-center items-center
					bg-opacity-20 text-center align-middle text-[clamp(8px,3vw,1.6rem)] font-[500] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]"
				>
					<span class="">Welcome to my Svelte & TailwindCSS site</span>
				</p>
			</div>
		</div>
	</div>
	<!-- buttons start here!! -->
	<div
		class="z-400 xs:scale-120 mt-4 flex h-[100px] w-[100%] flex-row items-center justify-center gap-4 transition-all sm:scale-125 md:scale-110"
	>
		<button
			class="border-[1px] select-none border-bluethree-100 flex h-[44px] w-[120px] transform items-center justify-center rounded-[12px]  bg-bluetwo-950/80 text-[12px] text-center uppercase shadow transition-all duration-300 ease-in-out active:schale-[0.999] hover:scale-[1.015] hover:bg-blue-200 hover:bg-[linear-gradient(45deg,rgb(0,255,255),rgb(0,0,255))] hover:text-white hover:drop-shadow-[0px_0px_2px_hsla(5,10%,9%,0.9)]"
			on:click={() => {
				window.location.reload();
			}}
		>
			refresh
			<svg>
				<T
			</svg>
		</button>

		<button
			type="button"
			class="border-[1px] select-none border-bluethree-100 flex h-[44px] w-[120px] transform items-center justify-center rounded-[12px]  bg-bluetwo-950/80 text-[12px] text-center uppercase shadow transition-all duration-300 ease-in-out active:schale-[0.999] hover:scale-[1.015] hover:bg-blue-200 hover:bg-[linear-gradient(45deg,rgb(0,255,255),rgb(0,0,255))] hover:text-white hover:drop-shadow-[0px_0px_2px_hsla(5,10%,9%,0.9)]"
			on:click={sendEmail}
		>
			Contact
			<img
				src="src/assets/email.png"
				style="margin-left:5px; height: 21px; width: 18px;filter: invert(100%);"
				class=" text-white hover:animate-fly duration-[2000ms] focus:animate-wave items-center transition-all"
				alt=""
			/>
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

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
