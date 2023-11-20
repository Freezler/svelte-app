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
	<div class="flex h-[100%] w-[100%] flex-col items-center justify-center text-center">
		<div>
			<div
				class="mx-auto flex h-[content] w-full animate-slow-slide-down flex-col-reverse items-center bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-40 px-[40px] py-10 pb-[48px] text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)] xs:flex-col sm:flex-col md:w-[100%] md:flex-row"
			>
				<Avatar
					size="clamp(200px, 15vw, 320px)"
					initials="RV"
					height="clamp(260px, 25vw, 320px)"
					textColor="white"
					name="Randy de vries"
					src="https://source.unsplash.com/560x560/?face')"
				/>
				<h3
					class="h-[235px] w-[100%] bg-[url(https://source.unsplash.com/1560x860/?church)] bg-cover bg-clip-text bg-center bg-no-repeat font-display
				  text-[clamp(32px,20vw,11rem)] font-[700] leading-[60px] text-transparent xxxs:leading-[68px] xxs:leading-[68px] xs:leading-[76px] sm:leading-[85px] md:leading-[85px] lg:leading-[85px]"
				>
					<span
						class="  mr-[135px] font-mono text-[clamp(8px,4vw,2rem)] font-[100] text-redone-100 text-shadow-[3px_3px_5px_rgba(245,52,445,0.9)] xxxs:mr-[270px] xxs:mr-[210px]
						xs:mr-[295px] sm:mr-[365px] md:mr-[365px] lg:mr-[355px] xl:mr-[350px]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" flex h-[screen] w-[100%] flex-col place-content-center items-center justify-items-center rounded-[8px] bg-astral-900 bg-opacity-20 px-6 pb-[40px] pt-4 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.2)]"
			>
				<p
					class="type w-[110%] place-content-center justify-self-center bg-opacity-20 text-center text-[clamp(13px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,2,252,0.2)]"
				>
					<span>Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
				<!-- buttons start here!! -->
				<div class="mt-8 flex flex-row gap-5">
					<button class="button-85" on:click={() => window.location.reload()}
						><span class="text">new image</span></button
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
		background: linear-gradient(
			45deg,
			#ff0000,
			#ff7300,
			#fffb00,
			#48ff00,
			#00ffd5,
			#002bff,
			#7a00ff,
			#ff00c8,
			#ff0000
		);
		position: absolute;
		top: -1px;
		left: -1px;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		-webkit-filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		animation: glowing-button-85 40s linear infinite;
		transition: opacity 0.3s ease-in-out alternate both;
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
		background-clip: content-box;
		background-color: hsla(225, 90%, 5%, 0.9);
		opacity: 0.98;
	}
	.button-85:hover {
		scale: 1.02;
		font-size: 101%;
		background-color: #63254f;
		transform-style: ;
		transition: all linear ease-in-out 1.5s;
	}
</style>
