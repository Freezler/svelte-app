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
	<div
		class="flex h-[100%] w-[100%] flex-col items-center justify-center gap-12 text-center"
	>
		<div>
			<div
				class="flex h-[screen] w-[100vw] animate-slow-slide-down flex-row-reverse place-content-center items-center justify-items-center gap-[40px] rounded-[8px] bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-40 px-6 pb-[40px] pt-4 text-center drop-shadow-[2px_2px_12px_hsla(245,20%,35%,0.3)]"
			>
				<Avatar
					size="clamp(200px, 25vw, 280px)"
					initials="RV"
					bgColor="hsla(255,0%,0%,0.9)"
					textColor="white"
					name="Randy de vries"
					src="https://source.unsplash.com/random/400x400?human-face"
				/>
				<h3
					class="font-display text-[clamp(10px,10vw,8rem)] font-[900] text-blueone-200 text-shadow-[3px_3px_5px_rgba(222,22,2,0.4)]"
				>
					<span
						class=" mr-[100%] font-serif text-[clamp(16px,5vw,6rem)] font-[100] text-redone-100 text-shadow-[3px_3px_5px_rgba(242,12,55,0.4)]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" flex h-[screen] w-[100%] flex-col place-content-center items-center justify-items-center rounded-[8px] bg-astral-900 bg-opacity-20 px-6 pb-[40px] pt-4 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.6)]"
			>
				<p
					class="type w-[110%] place-content-center justify-self-center bg-opacity-20 text-center text-[clamp(13px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]"
				>
					<span>Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
				<div class="flex flex-row gap-5">
					<button
						class="button-64 active:scale-[0.98]"
						on:click={() => window.location.reload()}
						><span class="text">new image</span></button
					>
					<!-- svelte-ignore a11y-unknown-role -->
					<button
						class="button-64 active:scale-[0.98]"
						role="sumbmit"
						on:click={() => sendEmail()}><span class="text">Contact</span></button
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

	/* CSS */
	.button-64 {
		align-items: center;
		background-image: linear-gradient(
			144deg,
			hsla(330, 100%, 88%, 0.459),
			#4a03628b 50%,
			#00ddeb
		);
		background-clip: margin-box;
		inset: 1;
		border: 0px;
		border-radius: 8px;
		box-shadow: 0px 0px 11px 1px hsla(295, 62%, 49%, 0.9);
		box-sizing: border-box;
		color: #ffffff;
		display: flex;
		font-family: Phantomsans, sans-serif;
		font-size: clamp(16px, 2vw, 32px);
		font-weight: 500;
		justify-content: center;
		line-height: 1em;
		width: clamp(120px, 20vw, 200px);
		padding: 2px;
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
		scale: 1.015;
		transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.button-64 span {
		background-color: rgba(150, 19, 150, 0.2);
		padding: 16px 24px;
		border-radius: 6px;
		width: 100%;
		height: 100%;
		transition: 600ms;
	}

	.button-64:hover span {
		background: linear-gradient(215deg, #33d5f96a, #ed06f571 50%, #33d5f951);
		transition: transform 1000ms cubic-bezier(0.645, 0.08, 0.86, 0.52) reverse;
		scale: 1;
		color: white;
	}

	@media (min-width: 768px) {
		.button-64 {
			font-size: 24px;
			min-width: 196px;
		}
	}
</style>
