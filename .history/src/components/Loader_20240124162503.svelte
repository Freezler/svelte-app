<script>
 	
</script>

<div class="circle">
	<!-- Your content, if any, goes here -->
	
</div>

<style>
	/* Your provided CSS goes here */

	.circle {
		position: absolute;
		top: calc(50% - 0px);
		left: calc(50% - 100px);
		transform: translate(5%, 5%);
		width: 150px;
		height: 150px;
		border: 1px solid transparent;
		border-bottom: 2px solid #36e494;
		border-top: 2px solid [skyblue];
		border-radius: 50%;
		animation: animate 2000ms cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
		translate: 15% -38%;
	}

	.circle:before {
		content: '';
		position: absolute;
		top: 12px;
		left: 12px;
		bottom: 12px;
		right: 12px;
		border: 1px solid transparent;
		border-bottom: 1px solid purple;
		border-top: 1px solid #2dfefa;
		border-radius: 50%;
		animation: animate 1200ms linear infinite;
	}

	.circle:after {
		content: '';
		position: absolute;
		top: 8px;
		left:8px;
		bottom: 8px;
		right: 8px;
		border: 1px solid transparent;
		border-bottom: 1px solid #ffffff;
		border-top: 1px solid #be90d4;
		border-radius: 50%;
		animation: animate 7 2000ms linear ;
	}

	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
