<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="absolute select-none items-center justify-center -translate-y-16 z-5 transparent w-full overflow-hidden bg-center bg-cover bg-no-repeat h-[100%] bg-[url('https://source.unsplash.com/random/?svelte,macbook')]"
>
	<div class="relative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center ">
			<div class="bg-secondary-900 bg-opacity-50 px-8 w-screen h-full text-center text-white">
				<div>
				<HeroButton />
			</div>
		</div>
	</div>
</section>
