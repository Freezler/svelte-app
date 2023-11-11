<script>
    // Define your plans as an array of objects
    const plans = [
      {
        price: 19,
        name: "Basic Plan",
        features: [
          "Ultimate Features",
          "Responsive Ready",
          "Visual Composer Included",
          "24/7 Support System",
        ],
      },
      {
        price: 29,
        name: "Regular Plan",
        features: [
          "Ultimate Features",
          "Responsive Ready",
          "Visual Composer Included",
          "24/7 Support System",
        ],
      },
      {
        price: 39,
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
  
  <div class=" w-full  animate-fast-slide-up flex flex-col items-center">
    <div class="md:pt-28 gap-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-visible w-[70%] mx-auto">
      {#each plans as plan (plan.price)}
        <div class="cards box-shadow-[3px_3px_px_white] text-center bg-purplethree-400 bg-opacity-40 pt-4 rounded-[8px] border-[#9c428f] border-[1px]  h-[350px]">
          <div class="mt-4">
            <h3 class="text-5xl text-purpleone-300">
              <span class="currency"></span>{plan.price}<span class="period">/month</span>
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
      margin: 0 auto;
    }
  </style>