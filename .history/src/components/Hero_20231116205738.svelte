<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
	const randomNumber = Math.floor(Math.random() * 100);
	let isHovered = false;
</script>

<section
	class="z-100 overflow-none mx-auto grid h-[100vh] w-[100vw] grid-cols-1 place-items-center justify-items-center text-center"
>
	<div
		class="  flex h-screen w-[100%] -translate-y-[50px] flex-1 flex-col items-center justify-center gap-2 text-center scale-100"
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
			class=" flex flex-col items-center justify-items-center py-5 px-6  h-[screen] w-[max-content] grid-cols-1 place-content-center rounded-[8px] bg-[hsla(255,14%,50%,0.4)] bg-opacity-50"
		>
			<h3 class=" text-[clamp(24px,2vw,5rem)] font-[500] text-blueone-200">
				<span class="font-sans text-redone-200 text-2xl">hi I am,</span> RANDY
			</h3>
			<p
				class="type w-[100%] place-content-center -space-y-2 justify-self-center bg-opacity-20 text-center text-[clamp(4px,2vw,1.2rem)] text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)]"
			>
				<span>Welcome to my web project made with Svelte & TailwindCSS</span>
			</p>
		</div>
		<div
			class="text-astral-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] grid translate-y-[20px] grid-cols-2 place-content-center justify-items-center gap-4 place-self-center font-[900] xs:translate-y-[30px] sm:translate-y-[10px]"
		>
			<button
			class="px-4 py-2 inline-block bg-gradient-to-br from-transparent via-black to-transparent bg-no-repeat rounded-lg"
			style="background-size: 350% 100%; transition: 0.5s linear;"
			class:bg-black={isHovered}
			on:mouseenter={() => isHoveredNewI = true}
			on:mouseleave={() => isHovered = false}>
				NEW IMG
			</button>
			<button
			class="inline-block bg-gradient-to-br from-transparent via-black to-transparent bg-no-repeat rounded-lg"
			style="background-size: 350% 100%; transition: 0.5s linear;"
			class:bg-black={isHovered}
			on:mouseenter={() => isHovered = true}
			on:mouseleave={() => isHovered = false}
			>
				CONTACT
			</button>
		</div>
	</div>
</section>

<style>
	.type {
  display:inline-flex;
}
.type span {
  word-break: break-all;
  height: 1.2em;
  width:0%;
  overflow: hidden;
  animation: t 10s linear infinite alternate;
}
.type span:before {
  content:" ";
  display:inline-block;
}
@keyframes t{
  100%,100% {width:100%}
}
</style>
