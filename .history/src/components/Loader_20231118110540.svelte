<script>
	// Your Svelte logic can go here if needed
  </script>
  
  <style>
	/* Your provided CSS goes here */
	
  
	.circle {
	  position: absolute;
	  top: calc(50% - 0px);
	  left: calc(50% - 100px);
	  transform: translate(50%, 50%);
	  width: 150px;
	  height: 150px;
	  border: 1px solid transparent;
	  border-bottom: 2px solid #36E494;
	  border-top: 2px solid [skyblue];
	  border-radius: 50%;
	  animation: animate 3000ms linear infinite;
	  translate: 0% -25%;
	}
  
	.circle:before {
	  content: '';
	  position: absolute;
	  top: 10px;
	  left: 10px;
	  bottom: 10px;
	  right: 10px;
	  border: 1px solid transparent;
	  border-bottom: 1px solid purple;
	  border-top: 1px solid #2dfefa;
	  border-radius: 50%;
	  animation: animate 1200ms linear infinite;
	}
  
	.circle:after {
	  content: '';
	  position: absolute;
	  top: 25px;
	  left: 25px;
	  bottom: 25px;
	  right: 25px;
	  border: 1px solid transparent;
	  border-bottom: 1px solid #ffffff;
	  border-top: 1px solid #be90d4;
	  border-radius: 50%;
	  animation: animate 700ms linear infinite;
	  
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
  
  <div class="circle">
	<!-- Your content, if any, goes here -->
  </div>
  