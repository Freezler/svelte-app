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
					class="font-display text-[clamp(10px,10vw,8rem)] leading-[36px] font-[900] text-blueone-200 text-shadow-[3px_3px_5px_rgba(222,22,2,0.4)]"
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

	
</style>
