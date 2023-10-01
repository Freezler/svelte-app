<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="z-5 absolute h-screen w-full select-none items-center justify-center overflow-hidden
	 "
>
	<div
		class="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat
	"
	>
		<div class="flex h-full items-center">
			<div
				class=" h-full w-screen bg-opacity-90 bg-red-500">
				<div
					class="relative flex h-full w-full flex-col items-center justify-center shadow-[3px_3px_6px_#ff3d00]"
				>
					<span class="font-display text-5xl font-bold tracking-tight drop-shadow-[1.4px_3px_1.4px_rgba(1,1,1,0.9)]">
						<h1
							class="w-[100%] -skew-y-1 transform animate-fast-slide-in -space-x-4 font-display text-[clamp(5rem,8vw,4rem)] font-bold tracking-tighter  drop-shadow-[1.4px_3px_1.4px_rgba(1,1,1,0.5)]  text-6xl lg:text-7xl 
							bg-gradient-to-b bg-clip-text text-transparent from-green-900 via-blue-400 to-purple-900 md:transform-none"
						>
							{#each 'RANDY' as char}
								<span class="uppercase text-shadow-[-3px_-2px_2px_#dfe2ff]">
									{char}
								</span>
							{/each}
						</h1></span
					>
					<p
						class="md:text-200 line-clamp-4 w-[50%] items-center justify-center font-mono text-[clamp(0.8rem,2vw,1.5rem)] text-greenone-100"
					>
						Ontdek de magie van mijn Svelte-app - moeiteloos en intuïtief, voor een
						naadloze gebruikerservaring.
						<br />
						Althans.. dat is de bedoeling!
						<HeroButton />
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
