<script>
	// Your Svelte logic can go here if needed
  </script>
  
  <style>
	/* Your provided CSS goes here */
	
  
	.circle {
	  position: absolute;
	  top: calc(30% - 117px);
	  left: calc(50% - 100px);
	  transform: translate(-25%, -25%);
	  width: 200px;
	  height: 200px;
	  border: 4px solid transparent;
	  border-bottom: 4px solid #36E494;
	  border-top: 4px solid #fa8072;
	  border-radius: 50%;
	  animation: animate 3000ms linear infinite;
	}
  
	.circle:before {
	  content: '';
	  position: absolute;
	  top: 20px;
	  left: 20px;
	  bottom: 20px;
	  right: 20px;
	  border: 4px solid transparent;
	  border-bottom: 4px solid #ff7f50;
	  border-top: 4px solid #2dfefa;
	  border-radius: 50%;
	  animation: animate 2.5s linear infinite;
	}
  
	.circle:after {
	  content: '';
	  position: absolute;
	  top: 50px;
	  left: 50px;
	  bottom: 50px;
	  right: 50px;
	  border: 4px solid transparent;
	  border-bottom: 4px solid #ffffff;
	  border-top: 4px solid #be90d4;
	  border-radius: 50%;
	  animation: animate 2s linear infinite;
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
  
  <div class="circle relative">
	<!-- Your content, if any, goes here -->
  </div>
  