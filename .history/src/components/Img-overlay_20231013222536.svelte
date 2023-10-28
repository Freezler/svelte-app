<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class=" flex flex-1 -z-10 top-0 h-screen select-none overflow-hidden 
	 "
>
	<div
		class=" z-10  overflow-hidden bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat w-screen h-full items-center justify-center  text-3xl text-center"
	>
		<div class="relative flex h-screen items-center justify-evenly mt-[32%]">
			<div class="flex items-center justify-top h-full w-full flex-col">
				<h1
					class="text-skew-y-1 mb-[4rem] mt-[20%] w-[100%] transform animate-slow-fade-in -space-x-3 text-center font-sans text-[clamp(4rem,12vw,10rem)] font-[800] drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]
							 md:transform-none"
				>
					{#each 'RANDY' as char}
						<span
							class=" bg-gradient-to-br from-rosetwo-900 via-bluetwo-300 to-bluetwo-900 bg-clip-text bg-no-repeat uppercase text-transparent"
						>
							{char}
						</span>
					{/each}
				</h1>

				<div
					class="flex w-[80%] items-center justify-center rounded border-[1px] border-bluethree-900 bg-greytwo-100/10 bg-cover bg-center bg-no-repeat px-5 py-5 text-center shadow-[4px_4px_5px_rgba(2,12,34,0.3)] backdrop-blur-xl"
				>
					<p
						class=" line-clamp-5 w-full items-center justify-center text-center font-display text-[clamp(0.75rem,2vw,1.5rem)] font-thin text-white"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
						incidunt vitae, modi est qui officia recusandae, sit quaerat omnis fugit
						accusamus ex ut et dolorem, vero voluptates assumenda quia quam?
					</p>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
