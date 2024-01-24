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
		transform: translate(5%, 50%);
		width: 150px;
		height: 150px;
		border: 1px solid transparent;
		border-bottom: 2px solid #36e494;
		border-top: 2px solid [skyblue];
		border-radius: 50%;
		animation: animate 1400ms ease-in infinite;
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
		animation: animate 1200ms ease-out infinite;
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
		animation: animate  1000ms ease ;
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
