<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
	class="z-100 overflow-none mx-auto flex h-[100%] w-[100%] animate-slow-fade-in flex-col items-center justify-around text-center"
>
	<div class="  flex w-[100%] flex-col items-center gap-[20px] text-center">
		<Avatar
			size="clamp(140px, 25vh, 350px)"
			initials="RV"
			bgColor="hsla(255,0%,0%,0.9)"
			textColor="white"
			name="Randy de vries"
			src="https://source.unsplash.com/random/700x700?human-face"
			class="hue-rotate-180 saturate-150 filter "
		/>
		<div
			class=" flex h-[screen] w-[100%] flex-col place-content-center items-center justify-items-center rounded-[8px] bg-astral-900 bg-opacity-40 px-6 pb-8 pt-4 text-center drop-shadow-[2px_2px_12px_hsla(155,50%,59%,0.2)]"
		>
			<h3 class="font-mono text-[clamp(20px,5vw,7rem)] font-[900] text-blueone-200">
				<span class="font-handwriting text-xl text-redone-200">hi, I'm </span>RANDY
			</h3>
			<p
				class="type w-[110%] place-content-center -space-y-2 justify-self-center bg-opacity-20 text-center text-[clamp(13px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]"
			>
				<span>Welcome to my web project made with Svelte & TailwindCSS</span>
			</p>
			<div class="container">
				<button class="button-64" role="button"><span class="text">new im</span></button>
				<button class="button-64" role="button"><span class="text">Button 64</span></button>
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
	background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
	border: 0;
	border-radius: 8px;
	box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
	box-sizing: border-box;
	color: #FFFFFF;
	display: flex;
	font-family: Phantomsans, sans-serif;
	font-size: 20px;
	justify-content: center;
	line-height: 1em;
	max-width: 100%;
	min-width: 140px;
	padding: 3px;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	white-space: nowrap;
	cursor: pointer;
}

.button-64:active,
.button-64:hover {
	outline: 0;
}

.button-64 span {
	background-color: rgb(5, 6, 45);
	padding: 16px 24px;
	border-radius: 6px;
	width: 100%;
	height: 100%;
	transition: 300ms;
}

.button-64:hover span {
	background: none;
}

@media (min-width: 768px) {
	.button-64 {
		font-size: 24px;
		min-width: 196px;
	}
}
</style>