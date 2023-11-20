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
				class="mx-auto flex h-[screen] w-full animate-slow-slide-down flex-row-reverse items-center gap-2 bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-40 px-[40px] py-10 pb-[48px] text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)] md:w-[100%]"
			>
				<Avatar
					size="clamp(200px, 15vw, 320px)"
					initials="RV"
					height="clamp(260px, 25vw, 320px)"
					textColor="white"
					name="Randy de vries"
					src="https://source.unsplash.com/random/800x800?human-face"
				/>
				<h3
					class="font-display bg-clip-text bg-(url(https://source.unsplash.com/random/800x800?human-face) 0% 0% / 100% 100% no-repeat) bg-cover bg-no-repeat bg-[oklch(12.5%_0.057_322.41)] text-[clamp(28px,14vw,8rem)] font-[700] leading-[42px] text-tra text-shadow-[3px_3px_5px_rgba(55,42,25,0.9)] xxs:leading-[48px] xs:leading-[56px] sm:leading-[72px] md:leading-[84px] lg:leading-[84px]"
				>
					<span
						class=" xxs:mr-[185px]font-mono mr-[135px] text-[clamp(8px,4vw,2rem)] font-[100] text-redone-100 text-shadow-[3px_3px_5px_rgba(245,52,445,0.9)] xxxs:mr-[270px] xxs:mr-[210px]
						xs:mr-[295px] sm:mr-[365px] md:mr-[365px] lg:mr-[355px] xl:mr-[350px]"
						>hi, I'm<br />
					</span>RANDY
				</h3>
			</div>
			<div
				class=" flex h-[screen] w-[100%] flex-col place-content-center items-center justify-items-center rounded-[8px] bg-astral-900 bg-opacity-20 px-6 pb-[40px] pt-4 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.9)]"
			>
				<p
					class="type w-[110%] place-content-center justify-self-center bg-opacity-20 text-center text-[clamp(13px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,2,252,0.2)]"
				>
					<span>Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
				<!-- buttons start here!! -->
				<div class="mt-8 flex flex-row gap-5">
					<button
						class="rounded-[8px] border-[1px] px-4 active:scale-[0.98]"
						on:click={() => window.location.reload()}
						><span class="text">new image</span></button
					>
					<!-- svelte-ignore a11y-unknown-role -->
					<button
						class="px-4 py-2 active:scale-[0.98]"
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
