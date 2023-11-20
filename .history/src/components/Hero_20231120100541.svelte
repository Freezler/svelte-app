<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
	class="z-100 overflow-none mx-auto flex h-[100%] w-[100%] animate-slow-fade-in flex-col items-center justify-center text-center"
>
	<div class="flex h-[content] w-[content] flex-col items-around justifi- text-center">
		<div class="flex h-[100%] w-[100%] flex-col items-center justify-center">
			<div
				class="animate-slow-slide-down z-100 mx-auto flex h-[min-content] w-screen  flex-col-reverse items-center justify-around bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-40 px-[40px]   text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)] xs:flex-col sm:flex-col md:w-[100%] md:flex-row-reverse md:px-[40px] md:py-10 md:pb-[48px] lg:flex-row"
			>
				<Avatar 
					size="clamp(200px, 15vw, 320px)"
					initials="RV"
					height="clamp(260px, 25vw, 320px)"
					textColor="white"
					name="Randy de vries"
					src="https://source.unsplash.com/560x560/?human"
				/>
				<h3
					class=" text-center animate-slow-slide-down font-Poppins h-[content] w-[100%] bg-[url(https://source.unsplash.com/1920x1080/?white,pink)] bg-cover bg-clip-text bg-center bg-no-repeat
				  text-[clamp(32px,20vw,11rem)] font-[700]  text-transparent drop-shadow-[1px_1px_12px_rgba(245,52,445,0.4)]"
				>
					<span
						class=" flex flex-col items-end justify- pt-28 box-border h-[max-content] w-[100vw] font-display text-[clamp(8px,4vw,2rem)] font-[100] text-blueone-300 text-shadow-[1px_1px_5px_rgba(25,292,445,0.9)]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" flex h-[90px] w-[100vw]  flex-col place-content-center items-center justify-items-center rounded-[8px] bg-astral-900 bg-opacity-20 px-6 pb-[40px] pt-4 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.2)]"
			>
				<p
					class="type  w-[max-content] animate-slow-fade-in font-Poppins font-[500] 
					place-content-start place-items-center justify-items-evenly bg-opacity-20 text-left text-[clamp(12px,3vw,1.6rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]"
				>
					<span class="">Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
				<!-- buttons start here!! -->
				<div class="mt-8 flex flex-row gap-5">
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
		margin-left:  1rem;
	}
	.type span {
		word-break: break-all;
		height: 2.3rem;
		width: 0;
		overflow: hidden;
		animation: t 7s steps(70, end) infinite alternate both;
		text-align: left;
		letter-spacing: 1.2px;
	}
	.type span:before {
		content: ' ';
		display: inline-block;
	}
	@keyframes t {
		100%,
		100% {
			width: 110%;
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
		top: -2px;
		left: -2px;
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
		background-color: hsla(225, 90%, 5%, 0.85);
		opacity: 0.98;
	}
	.button-85:hover {
		font-size: 101%;

		transition: all linear ease-in-out 1.5s;
	}
</style>
