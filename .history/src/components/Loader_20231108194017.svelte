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
	  width: 200px;
	  height: 200px;
	  border: 2px solid transparent;
	  border-bottom: 2px solid #36E494;
	  border-top: 2px solid [skyblue];
	  border-radius: 50%;
	  animation: animate 3000ms linear infinite;
	  translate: 0% -40%;
	}
  
	.circle:before {
	  content: '';
	  position: absolute;
	  top: 20px;
	  left: 20px;
	  bottom: 20px;
	  right: 20px;
	  border: 2px solid transparent;
	  border-bottom: 2px solid purple;
	  border-top: 2px solid #2dfefa;
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
	  border: 2px solid transparent;
	  border-bottom: 2px solid #ffffff;
	  border-top: 2px solid #be90d4;
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
  
  <div class="circle md:mt-1  ">
	<!-- Your content, if any, goes here -->
  </div>
  