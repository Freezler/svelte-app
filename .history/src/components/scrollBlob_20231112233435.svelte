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
  
  <div id="container z-1000" class="w-[100vw] h-[100vh]">
	{#each info as item}
	  <div class="relative flex-1 h-full overflow-hidden transition-transform duration-500 ease-in-out hover:transform hover:scale-125 slide">
		<div class="image" style="background-image: url({item.image});"></div>
		<div class="overlay absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out">
		  <div class="content transform -translate-x-full transition-transform duration-500 ease-in-out hover:transform hover:translate-x-0">
			<h1 class="title" data-title={item.city}>{item.city}</h1>
			<div class="emblem transform translate-x-full transition-transform duration-500 ease-in-out hover:transform hover:translate-x-0" style="background-image: url({item.emblem});"></div>
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
  