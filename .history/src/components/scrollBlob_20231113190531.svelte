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

<div class="relative flex-row  w-[100vw] h-[100vh] flex ">
  {#each info as item}
  <div class="slide relative trans flex-1 flex-row h-[100vh]  overflow-hidden">
	<div class="image transition-transform duration-500 ease-in-out transform hover:scale-125">
	  <img src={item.image} alt={item.city} />
	</div>
	<div class="overlay relative top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-transparent opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
	  <div class="content transform duration-500 ease-in-out -translate-x-full hover:translate-x-0">
		<h2 class="m-0 p-0 relative">{item.city}</h2>
		<h3 class="m-0 p-0 relative">{item.country}</h3>
		<p class="m-0 p-0 relative">{item.population}</p>
		<p class="m-0 p-0 relative">{item.founded}</p>
	  </div>
	  <div class="emblem transition-transform duration-500 ease-in-out -translate-x-[0]  scale-105 opacity-100 z-400 hover:scale-100 -translate-y-[100%]">
		<img src={item.emblem} alt={item.city} />
	  </div>
	</div>
  </div>
  {/each} 
</div>