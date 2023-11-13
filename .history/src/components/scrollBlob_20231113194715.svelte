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

<div class="relative  flex-1 flex-row w-[100vw] h-[100vh] flex">
  {#each info as item}
  <div class="slide relative transition-all duration-500 ease-in-out flex-1 flex-col  overflow-hidden">
	<div class="z-10 absolute h-[100vh] image transition-transform duration-500 ease-in-out transform hover:w-[100vw] hover:scale-125 flex-grow">
		<img class="h-[100%] max-w-[100%] w-[100vw] object-cover" src={item.image} alt={item.city} />
	  </div>
	<div class="z-100  overlay  w-[100%] h-[100vh] flex flex-row hover:bg-rgba(0,0,0,0.5) -translate-y-[100%] bg-transparent opacity-0 transition-opacity duration-500 ease-in hover:opacity-100">
	  <div class="content transform duration-500 ease-in-out translate-x-[0] bg-yellow-400 bg-opacity-50 hover:opacity-100">
		<h2 class="m-0 p-0 relative w-[50%]">{item.city}</h2>
		<h3 class="m-0 p-0 relative w-[50%]">{item.country}</h3>
		<p class="m-0 p-0 relative w-[50%]">{item.population}</p>
		<p class="m-0 p-0 relative w-[50%]">{item.founded}</p>
	  </div>
	  <div class="emblem h-[150px] w-[150px] transition-all duration-500 ease-in-out -translate-x-[0]  scale-105 opacity-100 z-100 hover:scale-100 translate-y-[10]">
		<img src={item.emblem} alt={item.city} />
	  </div>
	</div>
  </div>
  {/each} 
</div>