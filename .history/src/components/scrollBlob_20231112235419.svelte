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
  *,
  html {
	height: 100vh;
	width: 100vw;
	box-sizing: border-box;
  }

  * {
	background: #1f1f1f;
	font-family: "Open Sans Condensed", sans-serif;
  }

  h1, h2, h3, h4 {
	font-family: "Abril Fatface", serif;
  }

  #container {
	position: relative;
	display: flex;
	align-items: center;
	height: 100vh;
	width: 100vh;
  }

  .slide {
	position: relative;
	flex: 1;
	height: 100%;
	width: 100vw;
	overflow: hidden;
  
  }

  .image {
	transition: transform 0.5s ease-in-out;
  }

  .overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	opacity: 1;
	transition: opacity 0.5s ease-in-out;
  }

  .slide:hover .image {
	transform: scale(1.2);
  }

  .slide:hover .overlay {
	opacity: 1;
	w
  }

  .content {
	transform: translateX(-100%);
	transition: transform 0.5s ease-in-out;
  }

  .slide:hover .content {
	transform: translateX(5);
  }

  .emblem {
	transform: scaleX(100%);
	transition: transform 0.5s ease-in-out;
	opacity: 1;
  }

  .slide:hover .emblem {
	transform: translateX(0);
  }
</style>

<div id="container" class="w-screen h-full box-border">
  {#each info as item}
  <div class="slide">
	<div class="image">
	  <img src={item.image} alt={item.city} />
	</div>
	<div class="overlay">
	  <div class="content">
		<h2>{item.city}</h2>
		<h3>{item.country}</h3>
		<p>{item.population}</p>
		<p>{item.founded}</p>
	  </div>
	  <div class="emblem">
		<img src={item.emblem} alt={item.city} />
	  </div>
	</div>
  </div>
  {/each}
</div>