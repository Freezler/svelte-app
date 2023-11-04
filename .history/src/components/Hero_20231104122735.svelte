<script>
	function handleContactButtonClick() {
		// Call the sendEmail function here
		document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
	}
	import Avatar from 'svelt';
</script>

<section
	class="mx-auto mt-[50%] flex h-[240px] w-full flex-col items-center justify-center bg-slate-400 bg-opacity-30 bg-cover text-center xs:mt-[10%] md:w-[60%]"
	id="home"
>
	<div class="flex flex-col gap-2">
		<div class="flex flex-col items-center justify-center">
			<Avatar
				bgColor="hsla(234,100%,59%,0.3)"
				textColor="white"
				name="Randy de vries"
				src="https://avatars.dicebear.com/api/initials/randy.svg"
				size="100px"
			/>
		</div>
		<div>
			<small>hoi, ik ben</small>
			<h1>RANDY</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus tenetur qui.
				Culpa quae nobis explicabo dolores, velit distinctio magnam?
			</p>
		</div>
		<div>
			<button
				class="btn-hero hover:bg-black hover:text-white"
				on:click={handleContactButtonClick}
				type="button"
			>
				INFO
			</button>
			<button
				class="btn-hero hover:bg-black hover:text-white"
				on:click={handleContactButtonClick}
				type="button"
			>
				CONTACT
			</button>
		</div>
	</div>
</section>

<style>
</style>
