<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="z-5 absolute h-[100%] w-full select-none items-center justify-center overflow-hidden
	 "
>
	<div
		class="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900 bg-cover bg-center bg-no-repeat
	"
	>
		<div class="flex h-full items-center">
			<div
				class=" h-full w-screen flex gap-8 ">
				<div
					class="relative flex h-full w-full flex-col items-center justify-center shadow-[3px_3px_6px_#ff3d00]"
				>
					<span class=" drop-shadow-[3.4px_3px_2.4px_rgba(1,1,1,0.9)]">
						<h1
							class="w-[100%] -skew-y-1 transform animate-fast-slide-in drop-shadow-[4px_4px_2px_rgba(225,225,190,0.9)]  font-serif	 text-[clamp(3.8rem,8vw,10rem)] font-bold tracking-tight   text-shadow-[1px_1px_3px_linear_gradient[90deg  ]]
							 md:transform-none"
						>
							{#each 'RANDY' as char}
								<span class="tracking-wide	 uppercase text-shadow-[-3px_-2px_2px_hsl(199.123deg 96.21% 26.6%)] bg-gradient-to-b from-rosetwo-600 via-bluethree-500 to-purplethree-900 bg-clip-text bg-no-repeat text-transparent">
									{char}
								</span>
							{/each}
						</h1></span
					>
					<p
						class="md:text-200 line-clamp-5 text-center w-[50%] items-center justify-center font-sans text-[clamp(0.5rem,2vw,1.5rem)] text-greenone-100"
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
</section>
