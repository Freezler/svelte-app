<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="absolute select-none items-center justify-center  z-5 transparent w-full overflow-hidden bg-center bg-cover bg-no-repeat h-[100%] bg-[url('https://source.unsplash.com/random/?svelte,macbook')]"
>
	<div class="frelative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center">
			<div class="bg-secondary-900 bg-opacity-50 px-8 w-screen h-full text-center">
				<div class=" font-display font-semibold">
					<h1
						class="tracking-tight w-full -space-x-11 font-mono font-semithin  -skew-y-2 md:transform-none absolute text-tertiary-200 text-8xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[9rem]"
					>
						<span class="text-shadow-le][0_4px_1px_purp">R</span>
						<span class="text-shadow-screens: {
							xxxxs: '240px', // Extra extra extra extra small screen size
							xxxs: '320px', // Extra extra extra small screen size
							xxs: '480px', // Extra extra small screen size
							xs: '640px', // Extra small screen size
							sm: '768px', // Small screen size
							md: '1024px', // Medium screen size
							lg: '1280px', // Large screen size
							xl: '1440px', // Extra large screen size
							xxl: '1920px', // Extra extra large screen size
							xxxl: '3840px' // 4K screen size (3840px)
							// Je kunt meer schermformaten toevoegen indien nodig
						  }
						  ">A</span>
						<span class="text-shadow">N</span>
						<span class="text-shadow">D</span>
						<span class="text-shadow">Y</span>
					</h1>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
