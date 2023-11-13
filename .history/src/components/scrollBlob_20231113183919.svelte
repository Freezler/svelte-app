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