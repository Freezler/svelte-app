<script>


    // Define your plans as an array of objects
    const plans = [
      {
        price: "javaScript",
        features: [
          "Fundamentals(js, css,html)",
          "Jquery, Bootstrap",
          "Visual Composer Included",
          "24/7 Support System",
        ],
        name: "javaScript",
        features: [
          "Fundamentals(js, css,html)",
          "Jquery, Bootstrap",
          "Visual Composer Included",
          "24/7 Support System",
        ],
      },
      {
        price: "CSS",
        name: "Regular Plan",
        features: [
          "Ultimate Features",
          "Responsive Ready",
          "Visual Composer Included",
          "24/7 Support System",
        ],
      },
      {
        price: 'H',
        name: "Premium Plan",
        features: [
          "Ultimate Features",
          "Responsive Ready",
          "Visual Composer Included",
          "24/7 Support System",
        ],
      },
    ];
  </script>
  
  <div class=" w-full  animate-fast-fade-in flex flex-col items-center justify-top">
    <div class="md:pt-28 gap-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-visible w-[400px]  sm:w-[500px] md:w-[80%] lg:w-[80%] mx-auto">
      {#each plans as plan (plan.price)}
        <div class="cards mt-8 box-shadow-[3px_3px_px_white] text-center bg-[url('https://source.unsplash.com/1440x1200/?background')] bg-cover object-fit bg-center bg-opacity-40 pt-4 rounded-[8px] border-[#9c428f] border-[1px]  h-[350px] md:h-[400px] place-self-top md:-translate-y-16">
          <div class="mt-4">
            <h3 class="text-5xl text-purpleone-300">
              <span class="currency"></span>{plan.price}
            </h3>
          </div>
          <div class="grid gap-3 ">
            <h4 class="font-bold text-rose-50 pb-[8px] border-b-[1px] border-purpleone-600 w-[100%] mx-auto">
              {plan.name}
            </h4>
            <ul class="list-group text-purpleone-50 ">
              {#each plan.features as feature (feature)}
                <li class="list-group-item">{feature}</li>
              {/each}
            </ul>
            <a href="#blank" class="my-4 md:w-[70%] mx-auto bg-red-200 text-white py-2 px-4 border-[1px] rounded-[4px]">Choose Plan</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <style>
    .cards:nth-of-type(3) {
      margin-bottom: 8rem;
    }
  </style>