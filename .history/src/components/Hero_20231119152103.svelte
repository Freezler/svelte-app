<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
	class="z-100 overflow-none gap-8 	mx-auto flex h-[100%] w-[100%] animate-slow-fade-in flex-col items-center justify-center text-center"
>
	<div class="  flex w-[100%] flex-col items-center  text-center">
		<Avatar
			size="clamp(170px, 25vw, 350px)"
			initials="RV"
			bgColor="hsla(255,0%,0%,0.9)"
			textColor="white"
			name="Randy de vries"
			src="https://source.unsplash.com/random/700x700?human-face"
			class="hue-rotate-180 saturate-150 filter "
		/>
		<div
			class=" flex h-[screen] w-[100%] flex-col place-content-center items-center justify-items-center rounded-[8px] bg-astral-900 bg-opacity-40 px-6 pb-8 pt-4 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.6)]"
		>
			<h3 class="font-mono text-[clamp(20px,5vw,7rem)] font-[900] text-blueone-200">
				<span class="font-handwriting text-xl text-redone-300">hi, I'm </span>RANDY
			</h3>
			<p
				class="type w-[110%] place-content-center  justify-self-center bg-opacity-20 text-center text-[clamp(13px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]"
			>
				<span>Welcome to my web project made with Svelte & TailwindCSS</span>
			</p>
			<div class="flex flex-row gap-5">
				
				<button  class="button-64 text-center active:scale-[0.98]" on:click={() => window.location.reload()}><span class="text">new image</span></button
				>
				<button class="button-64 active:scale-[0.98]" role="infoMail"><span class="text">Contact</span></button>
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

	/* CSS */
	.button-64 {
		align-items: center;
		background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
		background-clip: padding-box;
		inset: -1;
		border: 0;
		border-radius: 8px;
		box-shadow: rgba(252, 65, 149, 0.9) 0 5px 30px -5px;
		box-sizing: border-box;
		color: #ffffff;
		display: flex;
		font-family: Phantomsans, sans-serif;
		font-size: clamp(16px, 2vw, 32px);
		justify-content: center;
		line-height: 1em;
		width: clamp(120px, 20vw, 200px);
		padding: 3px;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		cursor: pointer;
		margin-top: 40px;
	}

	.button-64:active,
	.button-64:hover {
		outline: 0;
	}

	.button-64 span {
		background-color: rgba(30, 225, 53, 0.3);
		padding: 16px 24px;
		border-radius: 6px;
		width: 100%;
		height: 100%;
		transition: 300ms;
	}

	.button-64:hover span {
		background: none;
		background-color: ;
	}

	@media (min-width: 768px) {
		.button-64 {
			font-size: 24px;
			min-width: 196px;
		}
	}
</style>
