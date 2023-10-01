<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="relative -z-10 h-[100%] w-full select-none overflow-hidden
	 "
>
	<div
		class=" relative bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat
	"
	>
		<div class="flex h-screen">
			<div class=" flex h-screen w-screen items-center justify-center">
				<div class=" drop-shadow-[4.4px_4px_1.4px_rgba(255,255,255,0.5)]">
					<h1
						class=" text-skew-y-1 w-[100%] transform animate-fast-slide-in -space-x-3 text-center font-serif text-[clamp(3rem,12vw,10rem)] font-[900] drop-shadow-[3px_3px_1px_rgba(225,225,255,0.5)]
							 md:transform-none"
					>
						{#each 'RANDY' as char}
							<span
								class=" bg-gradient-to-br from-bluetwo-900 via-bluetwo-300 to-bluetwo-900 bg-clip-text bg-no-repeat uppercase text-transparent"
							>
								{char}
							</span>
						{/each}
					</h1>

					<div
						class="align-items-center flex h-60 w-[100%] items-center justify-center rounded border-[1px] border-bluethree-500 bg-bluetwo-950/10 bg-cover bg-center bg-no-repeat text-center shadow-[4px_4px_5px_rgba(2,12,34,0.3)] backdrop-blur-xl"
					>
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
