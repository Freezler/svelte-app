
<script>
	let info = [
	  {
		city: 'Venice',
		country: 'Italy',
		population: '260,060',
		founded: '697',
		image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/venice.jpg',
		emblem: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/italian-emblem.svg'
	  },
	  {
		city: 'Paris',
		country: 'France',
		population: '2.2 Million',
		founded: '~250BC',
		image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/paris.jpg',
		emblem: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/french-emblem.svg'
	  },
	  {
		city: 'Salzburg',
		country: 'Austria',
		population: '145,871',
		founded: '1622',
		image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/salzburg.jpg',
		emblem: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/austrian-emblem.svg'
	  },
	  {
		city: 'Prague',
		country: 'Czech Republic',
		population: '1.2 Million',
		founded: '870',
		image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/prague.jpg',
		emblem: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/czech-emblem.svg'
	  }
	];
  </script>
  
  <style>

	* {
		border: 2px solid red;
	}
	
  
	
  
	.slide:hover .overlay {
	  opacity: 1;
	 
	}
  
	.content {
	  transform: translateX(-100%);
	  transition: transform 500ms ease-in-out;
	}
  
	.slide:hover .content {
	  transform: translateX(0);
	}
  
	.emblem {
	  transform: translateX(100%);
	  transition: transform 500ms ease-in-out;
	}
  
	.slide:hover .emblem {
	  transform: translateX(0);
	}
  </style>

<div id="container" class="w-[100vw] h-[100vh] flex overflow-hidden" data-sveltekit-prefetch data-sveltekit-noscroll data-sveltekit-preload-data>
  {#each info as item}
	<div class="relative flex-1 h-[100vh] overflow-hidden slide transform-all ">
	  <div class="image transform-all h-[100vh] overflow-hidden  transition-all duration-500 ease-in-out">
		<img src="{item.image}" class="w-[100vw] h-[100vh] object-cover hover:w-full hover:h-full transition-all duration-500 ease-in-out"  alt="">
	  <div class="overlay absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out">
		<div class="content transform-all flex flex-col items-center flex-1 transition-all duration-500 ease-in-out">
		  <h1 class="title underline border-b-[2px] space-y text-4xl  font-[Franklin] text-white" data-title={item.city}>{item.city}</h1>
		  <div class="z-50 relative emblem items-center  transform w-[100px] translate-y-[100px] transition-opacity  opacity-100 duration-400 ease-in-out"><img src="{item.emblem}" alt="" srcset=""></div>
		  <ul class="city-info">
			<li class="country text-xl font-sans font-bold text-white">{item.country}</li>
			<li class="founded text-md font-mono font-medium text-white ">Founded: {item.founded}</li>
			<li class="population text-ms font-mono font-medium text-white">Population: {item.population}</li>
		  </ul>
		</div>
		<div class="btn-close"></div>
	  </div>
	</div>
	</div>
  {/each}
</div>