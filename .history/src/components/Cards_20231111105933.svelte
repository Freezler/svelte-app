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
    image: "https://source.unsplash.com/1440x1200/CSS",

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
  
  <div class="relative  justify-center mx-auto  h-[screen] w-screen antialiased  text-center animate-fast-fade-in flex flex-col items-center justify-top">
    <div class="md:pt-28 gap-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-visible w-[400px]  sm:w-[500px] md:w-[80%] lg:w-[80%] mx-auto">
      {#each plans as plan (plan.price)}
        <div class=" relative cards mt-8 box-shadow-[3px_3px_px_white] text-center] pt-4 rounded-[8px] border-[#9c428f] border-[1px]  h-[350px] md:h-[400px] place-self-top md:-translate-y-16">
          
          <div class="mt-4 bg-grey-900 bg-opacity-25">
            <h3 class="text-5xl text-purpleone-100">
              <span class="currency"></span>{plan.price}
            </h3>
          </div>
          <div class="grid gap-2  bg-slate-200 bg-opacity-25 ">
            <h4 class="font-bold text-rose-50  border-b-[1px] border-purpleone-600 w-[80%] mx-auto mb-2 ">
              {plan.name}
            </h4>
            <ul class="list-group text-purpleone-50 w-[100%] px-[2rem] md:px-[1rem] text-center">
              {#each plan.features as feature (feature)}
                <li class="list-group-item">{feature}</li>
              {/each}
            </ul>
            <button href="#blank" class=" absolute bottom-[1.2rem] left-[50%] translate-x-[-50%] my-4 w-[150px] md:w-[200px] mx-auto bg-red-200 text-white py-2 px-4 border-[1px] rounded-[4px]">More Info</button>
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