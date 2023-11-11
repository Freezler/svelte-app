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
  
  <div class="relative  justify-center mx-auto  h-[100%] w-full antialiased  text-center animate-slow-fade-in flex flex-col items-center justify-top">
    <div class="pt-8 md:pt-[28%] xl:pt-[25%] gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-visible w-[400px]  sm:w-[500px] md:w-[80%] lg:w-[80%] mx-auto">
      {#each plans as plan (plan.price)}
        <div class="   relative cards mt-8 text-shadow-[3px_3px_3px_hsla(149,91%,23%,1)] text-center min-w-[280px]  pt-4 rounded-[8px] border-[hsla(099,41%,25%,1)] shadow-[1px_1px_13px_1px_hsla(309,91%,23%,1)] border-[1px]  h-[380px] md:h-[380px] place-self-top md:-translate-y-[150px]">
          
          <div class="antialiased mt-4 bg-purpleone-700 bg-opacity-20 rounded-b-[8px] py-[4px]">
            <h3 class="text-5xl font-sans my-2 font-bold text-white text-shadow-lg">
              <span class="currency"></span>{plan.price}
            </h3>
          </div>
          <div class="grid gap-4 antialiased line-clamp-3 bg-purpleone-700 bg-opacity-50 rounded-b-[8px] bg-blend-lighten text-shadow-[3px_3px_6px_black]">
            <h4 class="py-4 font-bold text-white  border-b-[1px] border-purpleone-600 w-[80%] mx-auto mb-2 ">
              {plan.name}
            </h4>
            <ul class="mb-0 list-group text-purpleone-950 w-[100%] px-[2rem] md:px-[1rem] text-center">
              {#each plan.features as feature (feature)}
                <li class="list-group-item text-sm font-display text-white ">{feature}</li>
              {/each}
            </ul>
            <button href="#blank" class=" absolute bottom-[1.2rem] left-[50%] translate-x-[-50%] my-4 w-[150px] md:w-[200px] mx-auto bg-purpleone-600 text-astral-100 uppercase font-bold py-2 px-0 border-[1px] rounded-[4px]">More Info</button>
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