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
	
  
	.overlay {
	  @apply ;
	}
  
	.slide:hover .image {
	  @apply ;
	}
  
	.slide:hover .overlay {
	  @apply opacity-100;
	}
  
	.content {
	  @apply transform -translate-x-full transition-transform duration-500 ease-in-out;
	}
  
	.slide:hover .content {
	  @apply transform translate-x-0;
	}
  
	.emblem {
	  @apply transform translate-x-full transition-transform duration-500 ease-in-out;
	}
  
	.slide:hover .emblem {
	  @apply transform translate-x-0;
	}
  </style>
  
  <div id="container" class="w-full h-full">
	{#each info as item}
	  <div class="relative flex-1 h-full overflow-hidden slide">
		<div class="image transition-transform duration-500 ease-in-out" style="background-image: url({item.image});"></div>
		<div class="overlay absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out">
		  <div class="content">
			<h1 class="title" data-title={item.city}>{item.city}</h1>
			<div class="emblem" style="background-image: url({item.emblem});"></div>
			<ul class="city-info">
			  <li class="country">Country: {item.country}</li>
			  <li class="founded">Founded: {item.founded}</li>
			  <li class="population">Population: {item.population}</li>
			</ul>
		  </div>
		  <div class="btn-close"></div>
		</div>
	  </div>
	{/each}
  </div>
  