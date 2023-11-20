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
			.buttons {
				margin-top: 50px;
				text-align: center;
				border-radius: 30px;
			}
		
			.blob-button {
				z-index: 1;
				position: relative;
				padding: 20px 46px;
				margin-bottom: 30px;
				text-align: center;
				text-transform: uppercase;
				color: cyan;
				font-size: 16px;
				font-weight: bold;
				background-color: transparent;
				outline: none;
				border: none;
				transition: color 0.5s;
				cursor: pointer;
				border-radius: 30px;
			}
		
			.blob-button:before {
				content: "";
				z-index: 1;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				border: 2px solid cyan;
				border-radius: 30px;
			}
		
			.blob-button:after {
				content: "";
				z-index: -2;
				position: absolute;
				left: 3px;
				top: 3px;
				width: 100%;
				height: 100%;
				transition: all 0.3s 0.2s;
				border-radius: 30px;
			}
		
			.blob-button:hover {
				color: #000;
				border-radius: 30px;
			}
		
			.blob-button:hover:after {
				transition: all 0.3s;
				left: 0;
				top: 0;
				border-radius: 30px;
			}
		
			.blob-button__inner {
				z-index: -1;
				overflow: hidden;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				border-radius: 30px;
				background: #ffffff;
			}
		
			.blob-button__blobs {
				position: relative;
				display: block;
				height: 100%;
				filter: url('#goo');
			}
		
			.blob-button__blob {
				position: absolute;
				top: 0;
				width: calc(100% / 4);
				height: 100%;
				background: cyan;
				border-radius: 100%;
				transform: translate3d(0, 150%, 0) scale(1.7);
				transition: transform 0.45s;
			}
		
			@supports (filter: url('#goo')) {
				.blob-button__blob {
					transform: translate3d(0, 150%, 0) scale(1.4);
				}
			}
		
			.blob-button__blob:nth-child(1) {
				left: 0;
				transition-delay: 0s;
			}
		
			.blob-button__blob:nth-child(2) {
				left: 30%;
				transition-delay: 0.08s;
			}
		
			.blob-button__blob:nth-child(3) {
				left: 60%;
				transition-delay: 0.16s;
			}
		
			.blob-button__blob:nth-child(4) {
				left: 90%;
			   
