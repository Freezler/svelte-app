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
	  height: 100%;
	  width: 100%;
	  
	  
	}
  
	.slide {
    position: relative;
    flex: 1;
    height: 100%;
	width: 100%;
    overflow: hidden;
  }

  .image {
    transition: transform 0.5s ease-in-out;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .slide:hover .image {
    transform: scale(1.2);
  }

  .slide:hover .overlay {
    opacity: 1;
  }

  .content {
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }

  .slide:hover .content {
    transform: translateX(0);
  }

  .emblem {
    transform: translateX(100%);
    transition: transform 0.5s ease-in-out;
  }

  .slide:hover .emblem {
    transform: translateX(0);
  }

  </style>
  
  <div id="container w-[100vw] h-[100vh] box-border">
  {#each info as item}
  <div class="slide transition-all">
	<div class="image" style="background-image: url({item.image});"></div>
	<div class="overlay absolute top-0 left-0 w-full h-full">
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
  