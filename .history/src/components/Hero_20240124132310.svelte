<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	import { fade } from 'svelte/transition';
</script>

<section
	transition:fade={{ delay: 3, duration: 600 }}
	class=" z-100 overflow-none flex h-full w-full animate-slow-fade-in items-center justify-center overflow-hidden border-4 border-teal-700 text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)] bg-" 
>
	<div class="xs:scale- w-full p-8 flex flex-col items-center gap-8 bg-[hsla(245,90%,5%,0.2)]">
		<div class="z-400 flex w-[auto] animate-slow-slide-up flex-col items-center justify-center">
			<Avatar
				size="160px"
				initials="RV"
				textColor="white"
				name="Randy de vries"
				src="src/assets/avatar2.jpg"
			/>
		</div>
		<div
			class="z-100 box-border h-[120px] animate-slow-slide-down flex-row items-center justify-center text-center drop-shadow-[2px_2px_12px_hsla(225,100%,99%,0.3)]"
		>
			<h1 class="animate-slow-slide-in-ltr z-50 flex flex-col items-center justify-center">
				Hi, my name is Randy!
			</h1>
			<p
				class=" m-0 flex w-[content] animate-slow-slide-in-rtl items-center justify-center bg-opacity-20 p-0
			text-center font-display text-[clamp(16px,2vw,1.6rem)] font-[500] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]"
			>
				<span class="typewriter">
					I'm a junior web developer from Amsterdam, Netherlands.
				</span>
			</p>
			<div
				class="z-45 flex h-[100px] w-[100%] flex-row items-center justify-center gap-4 transition-all"
			>
				<button
					class="z-500 flex transform select-none items-center justify-center rounded-lg border border-bluethree-100 bg-bluetwo-950/80 px-5 py-2.5 text-center uppercase shadow transition-all duration-200 ease-in-out hover:scale-[1.015] hover:bg-blue-200 hover:bg-[linear-gradient(45deg,rgba(0,255,255,0.5),rgba(0,0,5,0.5))] hover:text-white hover:drop-shadow-[0px_0px_2px_hsla(5,10%,9%,0.9)] active:scale-[0.999]"
					on:click={() => {
						window.location.reload();
					}}
				>
					refresh
					<img
						src="https://icons.getbootstrap.com/assets/icons/arrow-repeat.svg"
						class="infinite h-[16px] w-[16px] items-center transition-all hover:animate-spin"
						style="filter: invert(100%);opacity: 0.9; margin-left: 5px; height: 16px; width: 16px;"
						alt=""
					/>
				</button>

				<button
					type="button"
					class="z-45 active:schale-[0.999] flex transform select-none items-center justify-center rounded-lg border border-bluethree-100 bg-bluetwo-950/80 px-5 py-2.5 text-center uppercase shadow transition-all duration-200 ease-in-out hover:scale-[1.015] hover:bg-blue-200 hover:bg-[linear-gradient(45deg,rgba(0,255,255,0.5),rgba(0,0,5,0.5))] hover:text-white hover:drop-shadow-[0px_0px_2px_hsla(5,10%,9%,0.9)]"
					on:click={sendEmail}
				>
					Contact
					<img
						src="https://icons.getbootstrap.com/assets/icons/envelope.svg"
						style="margin-right: 2px; margin-left:5px; 	height: 21px; width: 18px;filter: invert(100%);"
						class="z-45 hover:animate-fly items-center text-white transition-all duration-[2000ms] focus:animate-wave"
						alt=""
					/>
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	span.typewriter {
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		border-right: 0.15em solid orange; /* The typwriter cursor */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 2.2; /* Adjust as needed */
		color: aliceblue;
		animation:
			typing 7.5s steps(62, end),
			blink-caret 0.75s step-end infinite;
	}

	@keyframes typing {
		0% {
			width: 0;
		}

		100% {
			width: 100%;
		}
	}
	@keyframes blink-caret {
		0%,
		100% {
			border-color: transparent;
		}
		50% {
			border-color: orange;
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
	h1 {
		font-family: 'League Spartan', sans-serif;

		font-weight: 600;
		color: whitesmoke;
	}
</style>
