<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="-z-10	 relative h-[100%] w-full select-none items-center justify-center overflow-hidden
	 "
>
	<div
		class=" z-10 relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat
	"
	>
		<div class="flex h-screen items-center">
			<div class=" flex h-full w-screen gap-8">
				<div
					class=" flex h-full w-full flex-col items-center justify-center  border-2 border-white bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat"
				>
					<span class=" drop-shadow-[4.4px_4px_1.4px_rgba(1,1,1,0.9)]">
						<h1
							class=" w-[100%] -skew-y-1 transform animate-fast-slide-in font-serif text-[clamp(3.8rem,8vw,10rem)]  -space-x-2 font-[900]  drop-shadow-[3px_3px_1px_rgba(225,225,255,0.92)]
							 md:transform-none mb-8"
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
					<div class="flex flex-col items-center border-2 w-6/">
					<p
						class=" line-clamp-5 w-[50%] items-center justify-center text-center font-sans text-[clamp(0.5rem,2vw,1.5rem)] text-greenone-100 mb-[8rem]"
					>
						Ontdek de magie van mijn Svelte-app - moeiteloos en intuïtief, voor een
						naadloze gebruikerservaring.
						<br />
						Althans.. dat is de bedoeling!
					</p>
					<HeroButton />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
