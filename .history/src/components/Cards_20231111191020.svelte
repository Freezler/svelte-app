<script>


    // Define your plans as an array of objects
    const plans = [
  {
    
    price: "HTML",
    name: "hyperText markup language",
    features: [
      "When: Created in 1993",
      "Who: Tim Berners-Lee",
      "What: HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
    ],
  },
  {
    

    price: "CSS",
    name: "cascading style sheet",
    features: [
      "When: Created in 1996",
      "Who: Håkon Wium Lie, Bert Bos",
      "What: CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.",
    ],
  },
  {
    price: "JavaScript",
    name: "JS (JavaScript)",
    features: [
      "When: Created in 1995",
      "Who: Brendan Eich",
      "What: JavaScript is a high-level, interpreted programming language that enables interactive web pages and web applications.",
    ],
  },
];
  </script>
  
  <div class="relative  justify-center mx-auto  h-[100%] w-full antialiased  text-center animate-slow-fade-in flex flex-col items-center justify-bottom">
    <svg
							xmlns="http://www.w3.org/2000/svg"
							class="gap-8   mx-auto animate-pulse"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="white"
							fill="rgba(39, 68, 82, 100%)"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
              <path stroke="none" d="M0 0h24v24H0z" fill="hsla(0, 0%, 100%, 0.1) class="img-shadow-[3px_3px_5px_hsla(255,100%,59%,0.9)]"" />
              <path d="M6 9l6 6l6 -6" />
               <path stroke="none" d="M10 9h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
							
							
						</svg>
    <div class="h-screen pt-[100px] md:mt-[200px] lg:mt-[200px] xl:mt-[240px] 2xl:mt-[280px] gap-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-visible w-[300px]  sm:w-[400px] md:w-[90%] lg:w-[80%] mx-auto">
      {#each plans as plan (plan.price)}
        <div class=" relative cards  text-shadow-[2px_2px_2px_hsla(99,70%,55%,0.6)] text-center min-w-[300px]  object-fit rounded-[4px] drop-shadow-[3px_3px_5px_hsla(149,91%,23%,1)] bo[hsla(099,41%,25%,1)] shadow-[1px_1px_13px_1px_hsla(259,91%,23%,1)] border-[1px]  h-[400px] md:h-[420px] place-self-top md:-translate-y-[150px]">
          
          <div class="antialiased  bg-greytwo-950 py-3  bg-blend-lighten h-[content]">
            <h3 class="text-5xl font-sans py my-4 font-bold text-white text-shadow-xl">
              <span class="currency"></span>{plan.price}
            </h3>
          </div>
          <div class="grid gap-4 antialiased line-clamp-3 bg-purpleone-200 bg-opacity-50  bg-blend-darken text-shadow-[3px_3px_6px_black]">
            <h4 class="pt-2 font-bold text-white  border-b-[1px] border-purpleone-600 w-[80%] mx-auto mb-2 ">
              {plan.name}
            </h4>
            <ul class="mb-6 list-group text-purpleone-450 w-[100%] px-[2rem] md:px-[1rem] text-center">
              {#each plan.features as feature (feature)}
                <li class="list-group-item text-sm font-display text-white ">{feature}</li>
              {/each}
            </ul>
            <button href="#blank" class="active:scale-[97%] active:border-[0px_200px_0px] absolute bottom-[16px] sm:bottom-[18px] left-[50%] translate-x-[-50%] my-3 w-[180px] md:w-[200px] mx-auto bg-purpleone-600 text-astral-100 uppercase font-bold py-2 px-0 border-[2px] hover:border-purpleone-700 hover:bg-blueone-100 hover:text-purpleone-700 hover:transition-all rounded-[6px] ">More Info</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <style>
    .cards:nth-of-type(1) {
      background-image: url("https://source.unsplash.com/1440x1200/?html");
      background-position: center;
      background-size: cover;
     background-clip: border-box;
    }

    .cards:nth-of-type(2) {
      background-image: url("https://source.unsplash.com/1440x1200/?css");
      background-position: center;
      background-size: cover;
    }
    .cards:nth-of-type(3) {
      background-image: url("https://source.unsplash.com/1440x1200/?javascript");
      background-position: center;
      background-size: cover;
    }
  </style>