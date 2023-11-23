<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
class=" z-100 overflow-none flex-col h-[100svh] w-screen animate-slow-fade-in  overflow-hidden text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)]"
>
<div class="flex w-[100%] md:flex-row-reverse flex-col justify-center items-center h-[500px] md:h-[350px] gap-4 md:gap-0">
	<Avatar
		size="clamp(120px, 20vh, 180px)"
		initials="RV"
		textColor="white"
		name="Randy de vries"
		src="https://source.unsplash.com/300x300/?bald
	"
		alt="Randy de vries"
	/>
	
			<div
				class=" z-100 h-[35%] w-[100%] animate-slow-slide-down flex-col items-center justify-center bg-astral-900 bg-opacity-50 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.2)]"
			>
				<p
					class="type font-displayjustify-items-evenly ml-8 flex w-[content] animate-slow-slide-in-rtl items-center justify-start
					bg-opacity-20 text-center align-middle text-[clamp(8px,3vw,1.6rem)] font-[500] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]"
				>
					<span class="">Welcome to my Svelte & TailwindCSS site</span>
				</p>
			</div>
		</div>
	
	<!-- buttons start here!! -->
	<div
		class="z-400 xs:scale-120 mt-4 flex h-[100px] w-[100%] flex-row items-center justify-center gap-4 transition-all sm:scale-125 md:scale-110"
	>
		<button
			class="active:schale-[0.999] flex h-[44px] w-[120px] transform select-none items-center justify-center rounded-[12px] border-[1px] border-bluethree-100 bg-bluetwo-950/80 text-center text-[12px] uppercase shadow transition-all duration-300 ease-in-out hover:scale-[1.015] hover:bg-blue-200 hover:bg-[linear-gradient(45deg,rgb(0,255,255),rgb(0,0,255))] hover:text-white hover:drop-shadow-[0px_0px_2px_hsla(5,10%,9%,0.9)]"
			on:click={() => {
				window.location.reload();
			}}
		>
			refresh
			<img
				src="https://icons.getbootstrap.com/assets/icons/arrow-repeat.svg"
				class="h-[16px] w-[16px] items-center transition-all target:animate-spin"
				style="filter: invert(100%);opacity: 0.9; margin-left: 5px; height: 16px; width: 16px;"
				alt=""
			/>
		</button>

		<button
			type="button"
			class="active:schale-[0.999] flex h-[44px] w-[120px] transform select-none items-center justify-center rounded-[12px] border-[1px] border-bluethree-100 bg-bluetwo-950/80 text-center text-[12px] uppercase shadow transition-all duration-300 ease-in-out hover:scale-[1.015] hover:bg-blue-200 hover:bg-[linear-gradient(45deg,rgb(0,255,255),rgb(0,0,255))] hover:text-white hover:drop-shadow-[0px_0px_2px_hsla(5,10%,9%,0.9)]"
			on:click={sendEmail}
		>
			Contact
			<img
				src="https://icons.getbootstrap.com/assets/icons/envelope.svg"
				style="margin-left:5px; height: 21px; width: 18px;filter: invert(100%);"
				class=" hover:animate-fly items-center text-white transition-all duration-[2000ms] focus:animate-wave"
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
		
	}
	.type span {
		word-break: break-all;
		height: 2.2rem;
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
