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

  let fullscreenImage = null;
  
  function showFullscreenImage(image) {
	fullscreenImage = image;
  }
  
  function hideFullscreenImage() {
	fullscreenImage = null;
  }
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

   .image-fullscreen {
	 position: fixed;
	 top: 0;
	 left: 0;
	 right: 0;
	 bottom: 0;
	 z-index: 999;
	 background-color: rgba(0, 0, 0, 0.9);
	 display: flex;
	 justify-content: center;
	 align-items: center;
   }
 
   .image-fullscreen img {
	 max-width: 100%;
	 max-height: 100%;
   }
 </style>
 
 <div id="app">
   <div class="container">
	 <div class="row">
	   <div class="col-md-3" v-for="(item, index) in info" :key="index">
		 <div class="slide">
		   <img :src="item.image" alt="City Image" width="300" height="200" @click="showFullscreenImage(item.image)" />
		   <div class="overlay"></div>
		   <div class="content">
			 <h3>{{ item.city }}</h3>
			 <ul class="city-info">
			   <li>Country: {{ item.country }}</li>
			   <li>Population: {{ item.population }}</li>
			   <li>Founded: {{ item.founded }}</li>
			 </ul>
		   </div>
		   <div class="emblem" :style="'background-image: url(' + item.emblem + ')'"></div>
		 </div>
	   </div>
	 </div>
   </div>
   <div class="image-fullscreen" v-if="fullscreenImage">
	 <img :src="fullscreenImage" alt="City Image" @click="hideFullscreenImage" />
   </div>
 </div>
 
 <script>
   new Vue({
	 el: '#app',
	 data: {
	   info: info,
	   fullscreenImage: fullscreenImage
	 },
	 methods: {
	   showFullscreenImage(image) {
		 this.fullscreenImage = image;
	   },
	   hideFullscreenImage() {
		 this.fullscreenImage = null;
	   }
	 }
   });
 </script>