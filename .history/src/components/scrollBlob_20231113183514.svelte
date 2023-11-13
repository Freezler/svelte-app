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
	.slide {
	  transition: transform 0.5s;
	}
  
	.slide:hover {
	  transform: scale(1.05);
	}
  
	.overlay {
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: rgba(0, 0, 0, 0.5);
	  opacity: 0;
	  transition: opacity 0.5s;
	}
  
	.slide:hover .overlay {
	  opacity: 1;
	}
  
	.content {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  text-align: center;
	  color: #fff;
	  opacity: 0;
	  transition: opacity 0.5s, transform 0.5s;
	}
  
	.slide:hover .content {
	  opacity: 1;
	  transform: translate(-50%, -60%);
	}
  
	.emblem {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  width: 80px;
	  height: 80px;
	  background-size: cover;
	  border-radius: 50%;
	  opacity: 0;
	  transition: opacity 0.5s, transform 0.5s;
	}
  
	.slide:hover .emblem {
	  opacity: 1;
	  transform: translate(-50%, -120%);
	}
  
	.city-info {
	  list-style-type: none;
	  padding: 0;
	  margin: 20px 0;
	}
  
	.city-info li {
	  margin-bottom: 10px;
	}
  </style>
  
  
  <div id="container"box-border class="relative flex items-center h-[100vh] w-[100vw]">
  {#each info as item}
	<div class="slide relative flex-1 h-full overflow-hidden cursor-pointer">
	  <div class="image" style="background-image: url({item.image});"></div>
	  <div class="overlay">
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
	