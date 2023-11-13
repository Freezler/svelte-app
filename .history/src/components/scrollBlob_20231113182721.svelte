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

<div id="flex-1" class="flex flex-col w-screen h-screen items-center relative top-0 left-0 right-0">
  {#each info as item}
	<div class="slide transition-all relative flex-1 overflow-hidden">
	  <div class="image duration-500" style="background-image: url({item.image}); width: 100vw;"></div>
	  <div class="overlay absolute top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500">
		<div class="content translate-x-full transition-transform duration-500">
		  <h1 class="text-white text-4xl">{item.city}</h1>
		  <h2 class="text-white text-2xl">{item.country}</h2>
		  <p class="text-white">{item.population} inhabitants</p>
		  <p class="text-white">Founded in {item.founded}</p>
		</div>
	  </div>
	  <img class="emblem translate-x-full transition-transform duration-500" src={item.emblem} alt="emblem">
	</div>
  {/each}
</div>