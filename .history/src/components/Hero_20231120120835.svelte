<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section class="z-100 overflow-hidden bg-[oklch(12.5%_0.057_322.41)] bg-opacity-40 flex h-screen w-screen animate-slow-fade-in flex-col items-center justify-center">
	<div class="flex-col h-[60%] w-full">
		<div class="flex h-full w-full justify-center items-start m-0 p-0">
			<Avatar
				size="clamp(140px, 15vw, 180px)"
				initials="RV"
				textColor="white"
				name="Randy de vries"
				src="https://source.unsplash.com/560x560/?human"
			/>
		</div>
		<div class="flex h-full w-full flex-col items-center justify-center">
			<div class="z-100 m flex w-full animate-slow-slide-down items-center justify-center bg-[oklch(12.5%_0.057_322.41)] bg-astral-950 bg-opacity-60">
				<h3 class="font-Poppins animate-slow-slide-down bg-[url(https://source.unsplash.com/1920x1080/?winter)] bg-cover bg-clip-text bg-center bg-no-repeat text-center text-[clamp(32px,20vw,11rem)] font-[600] text-transparent drop-shadow-[1px_1px_12px_rgba(245,52,445,0.4)]">
					<span class="translate-x-4 box-border flex h-[max-content] w-[90px] items-center place-self-center font-display text-[clamp(8px,4vw,2rem)] font-[100] text-blueone-300 text-shadow-[1px_1px_5px_rgba(25,292,445,0.9)]">hi, I'm<br /></span>
					RANDY
				</h3>
			</div>
			<div class="z-100 justify-center animate-slow-slide-down flex-col items-center justify-items-center bg-astral-900 bg-opacity-50 text-center">
				<p class="type font-Poppins justify-items-evenly animate-slow-fade-in bg-opacity-20 text-left align-middle text-[clamp(12px,3vw,1.6rem)] font-[500] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]">
					<span class="">Welcome to my web project made with Svelte & TailwindCSS</span>
				</p>
				<!-- buttons start here!! -->
				<div class="buttons mt-42 flex gap-5">
					<button class="blob-button" on:click={() => window.location.reload()}><span class="text">refresh</span></button>
					<!-- svelte-ignore a11y-unknown-role -->
					<button class="button-85" role="submit" on:click={() => sendEmail()}><span class="text">Contact</span></button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow: hidden;
			