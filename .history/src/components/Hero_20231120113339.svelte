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
	<div class="flex-col h-[60%] w-[100%] ">
		<div class="flex  h-[100%] w-[100%] justify-center items-start m-0 p-0  ">
			<Avatar
				size="clamp(140px, 15vw, 180px)"
				initials="RV"
				textColor="white"
				name="Randy de vries"
				src="https://source.unsplash.com/560x560/?human"
			/>
		</div>
		<div class="flex h-[100vh] w-[100%]  flex-col items-center justify-center">
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
						class="translate-x-4 box-border flex h-[max-content] w-[90px]  items-center place-self-center font-display text-[clamp(8px,4vw,2rem)] font-[100] text-blueone-300 text-shadow-[1px_1px_5px_rgba(25,292,445,0.9)]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" z-100 justify-center h-[max-content] animate-slow-slide-down flex-col items-center justify-items-center  bg-astral-900 bg-opacity-50   text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.2)]"
			>
				<p
					class="type font-Poppins justify-items-evenly w-[max-content] animate-slow-fade-in
					bg-opacity-20 text-left align-middle text-[clamp(12px,3vw,1.6rem)] font-[500] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]"
				>
					<span class="">Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
				<!-- buttons start here!! -->
				<div class="mt-42 flex  gap-5">
					<button class="button-85" on:click={() => window.location.reload()}
						><span class="text">refresh</span></button
					>
					<!-- svelte-ignore a11y-unknown-role -->
					<button class="button-85" role="sumbmit" on:click={() => sendEmail()}
						><span class="text">Contact</span></button
					>
				</div>
			</div>
		</div>
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

	@keyframes glowing-button-85 {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 100% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	.button-85 {
		padding: 0.6em 2em;
		border: none;
		outline: none;
		color: rgb(255, 255, 255);
		background: transparent;
		cursor: pointer;
		position: relative;
		z-index: 0;
		border-radius: 10px;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button-85:before {
		content: '';
		background: linear-gradient(45deg, blue, cyan, indigo, magenta, violet, rgb(218, 32, 172));
		position: absolute;
		top: 2px;
		left: 2px;
		right: 2px;
		background-size: 400%;
		z-index: -1;
		filter: blur(2px);
		-webkit-filter: blur(5px);
		width: calc(100% + 2px);
		height: calc(100% + 2px);
		animation: glowing-button-85 12s linear infinite;
		transition: opacity 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		border-radius: 10px;
	}

	.button-85:after {
		z-index: -1;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: transparent;
		left: 0;
		top: 0;
		border-radius: 10px;
		background-clip: border-box;
		background-color: hsla(225, 90%, 5%, 0.8);
		opacity: 0.98;
	}
	.button-85:hover {
		font-size: 101%;
		background: o;
		transition:all linear ease-in-out 1.5s;
	}
</style>
