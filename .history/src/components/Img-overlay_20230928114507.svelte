<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="absolute select-none items-center justify-center -translate-y-16 z-5 transparent w-full overflow-hidden bg-center bg-cover bg-no-repeat h-[100%] bg-[url('https://source.unsplash.com/random/?svelte,macbook')]"
>
	<div class="font-display relative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center">
			<div class="bg-secondary-900 bg-opacity-50 px-8 w-screen h-full text-center">
				<div class="text-4xl font-display font-semibold">
					<h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4">RANDY</h1>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
