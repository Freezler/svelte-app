<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHoveredNewImg = false;
	let isHoveredContact = false;
</script>

<section
	class="z-100 overflow-none mx-auto grid h-[100vh] w-[100vw] grid-cols-1 place-items-center justify-items-center text-center"
>
	<div
		class="  flex h-screen w-[100%] flex-1 -translate-y-[50px] scale-100 flex-col items-center justify-center gap-2 text-center"
	>
		<Avatar
			size="clamp(220px, 20vw, 250px)"
			initials="RV"
			bgColor="hsla(255,0%,0%,0.9)"
			textColor="white"
			name="Randy de vries"
			src="https://source.unsplash.com/random/700x700?human-face"
			class="filter:hue-rotate-180 filter-saturate-500 "
		/>
		<div
			class=" flex h-[screen] w-[max-content] grid-cols-1 flex-col place-content-center items-center justify-items-center rounded-[8px] bg-[hsla(255,14%,50%,0.4)] bg-opacity-50 px-6 py-5"
		>
			<h3 class="font-display font-[900] text-[clamp(32px,2vw,5rem)] text-blueone-200">
				<span class="font-sans text-1xl text-redone-200">hi I am,</span> RANDY
			</h3>
			<p
				class="type w-[100%] place-content-center -space-y-2 justify-self-center bg-opacity-20 text-center text-[clamp(16px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]"
			>
				<span>Welcome to my web project made with Svelte & TailwindCSS</span>
			</p>
		</div>
		<div
			class="grid translate-y-[20px] grid-cols-2 place-content-center justify-items-center gap-4 place-self-center font-[900] text-astral-100 xs:translate-y-[30px] sm:translate-y-[10px]"
		>
		<button
		class="transition-colors duration-700 ease-in-out  bg-transparent text-center text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]   hover:bg-teal-500 text-white hover:text-purplethree-300 border-[1px] border-teal-300 inline-block rounded-[8px] px-4 py-2 active:scale-[.99]  active:shadow-[1px_2px_2px_rgba(22,22,22,0.9)] shadow-[3px_3px_4px_rgba(22,22,22,0.9)] hover:bg-opacity-40"
		type="button" on:click={() => window.location.reload()}
	>
		NEW IMG
	</button>
	
	<button
		class="transition-colors duration-700 ease-in-out bg-transparent text-center text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]   hover:bg-teal-500 text-white hover:text-purplethree-300 border-[1px] border-teal-300 inline-block rounded-lg px-4 py-2 active:scale-[.99]  active:shadow-[1px_2px_2px_rgba(22,22,22,0.9)] shadow-[3px_3px_4px_rgba(22,22,22,0.9)] hover:bg-opacity-40"
		on:click={sendEmail}
	>
		CONTACT
	</button>
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
		animation: t 10s linear infinite alternate;
	}
	.type span:before {
		content: ' ';
		display: inline-block;
	}
	@keyframes t {
		100%,
		100% {
			width: 100%;
		}
	}
</style>
