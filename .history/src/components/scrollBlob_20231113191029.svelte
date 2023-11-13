<div class="relative flex-row w-[100vw] h-[100vh] flex">
  {#each info as item}
  <div class="slide relative transition-all duration-500 ease-in-out flex-1 flex-row h-[100vh]">
	<div class="image transition-transform duration-500 ease-in-out transform hover:scale-125">
	  <img src={item.image} alt={item.city} />
	</div>
	<div class="overlay relative w-full h-full flex items-center justify-center bg-transparent opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
	  <div class="content transform duration-500 ease-in-out -translate-x-full hover:translate-x-0">
		<h2 class="m-0 p-0 relative w-[100%]">{item.city}</h2>
		<h3 class="m-0 p-0 relative w-[100%]">{item.country}</h3>
		<p class="m-0 p-0 relative w-[100%]">{item.population}</p>
		<p class="m-0 p-0 relative w-[100%]">{item.founded}</p>
	  </div>
	  <div class="emblem h-[150px] w-[150px] transition-transform duration-500 ease-in-out -translate-x-[0]  scale-105 opacity-100 z-400 hover:scale-100 translate-y-[10]">
		<img src={item.emblem} alt={item.city} />
	  </div>
	</div>
  </div>
  {/each} 
</div>