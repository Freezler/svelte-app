<script>
	import { sendEmail } from '$lib/index.js';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section class="m-4 h-[200px] text-center  bg-cover bg-slate-400 bg-opacity-30" id="home">
	<div class="title-text">
		<h1>A new site</h1>
		<p>with a nice simple hero</p>
	</div>
</section>

<style>
	
	
	h1 {
		vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlpadding-top: 1rem;
		margin-bottom: 0.5rem;
	}
	p {
		margin: 0;
	}
</style>
