<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="-z-10 relative h-[100%] w-full select-none  overflow-hidden
	 "
>
	<div
		class=" z-10 relative bottom-0 left-0 right-0 top-0  h-full w-full overflow-hidden bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat
	"
	>
		<div class="flex h-screen ">
			<div class=" flex h-screen w-screen ">
				<div
					class=" flex flex-col "
				>
					<span class=" mt-8 drop-shadow-[4.4px_4px_1.4px_rgba(1,1,1,0.5)]">
						<h1
							class=" w-[100%]  text-center text-skew-y-1 transform animate-fast-slide-in font-serif text-[clamp(2.5rem,8vw,10rem)]  -space-x-2 font-[900]  drop-shadow-[3px_3px_1px_rgba(225,225,255,0.5)]
							 md:transform-none "
						>
							{#each 'RANDY' as char}
								<span
									class=" bg-gradient-to-br from-bluetwo-900 via-bluetwo-300 to-bluetwo-900 bg-clip-text bg-no-repeat uppercase  text-transparent"
								>
									{char}
								</span>
							{/each}
						</h1></span
					>
						<div class="flex flex-col items-center justify-center border-[1px] h-60 justify-self-center	w-[100%] text-center rounded border-bluethree-500 shadow-[4px_4px_5px_rgba(2,12,34,0.3)] bg-bluetwo-950/10 backdrop-blur-xl bg-cover bg-center bg-no-repeat ">
						<p
						class=" line-clamp-5 w-[80%] text-center font-sans text-[clamp(0.5rem,2vw,1.5rem)] text-blueone-100"
					>
						Ontdek de magie van mijn Svelte-app - moeiteloos en intuïtief, voor een
						naadloze gebruikerservaring.
						<br />
						Althans.. dat is de bedoeling!
					</p>
					
					</div>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
