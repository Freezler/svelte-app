<script>
	import { sendEmail } from '$lib/index.js';
	import { onMount } from 'svelte';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
class=" z-100 overflow-none flex-col h-[100svh] w-full justify-around items-center animate-slow-fade-in  overflow-hidden text-center drop-shadow-[2px_2px_12px_hsla(245,90%,5%,0.3)]"
>
<div class="z-400 flex w-[100%]   flex-col justify-center items-center ">
	<Avatar
		size="clamp(200px, 25vw, 380px)"
		initials="RV"
		textColor="white"
		name="Randy de vries"
		src="https://source.unsplash.com/300x300/?bald
	"
		alt="Randy de vries"
	/>
	
			
		</div>
		<div
		class=" z-100 h-[100px] w-[100%] animate-slow-slide-down flex-col items-center justify-center bg-astral-900 bg-opacity-50 text-center drop-shadow-[2px_2px_12px_hsla(15,00%,59%,0.2)]"
	>
		<p
			class="type font-display justify-items-between ml-8 flex w-[content] animate-slow-slide-in-rtl items-center justify-start
			bg-opacity-20 text-center align-middle text-[clamp(8px,3vw,1.6rem)] font-[500] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(2,3,2,0.8)]"
		>
			<span class="">Welcome to my Svelte & TailwindCSS site</span>
		</p>
	</div>
	<!-- buttons start here!! -->
	
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
		
	}
	.type span {
		word-break: break-all;
		height: 2.2rem;
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

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
