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
  
  <div class="overflow-scroll mt-4">
    <div class="md:pt-24 gap-8 grid md:-translate-y-[100px] grid-cols-1 min-w-[50%] md:min-w-max max-w-[100%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  h-[490px] overflow-scroll w-[70%] mx-auto">
      {#each plans as plan (plan.price)}
        <div class=" text-center bg-purplethree-400 bg-opacity-40 p-8 rounded-[8px]  h-[400px]">
          <div class="mt-4">
            <h3 class="text-5xl text-purpleone-300">
              <span class="currency">$</span>{plan.price}<span class="period">/month</span>
            </h3>
          </div>
          <div class="grid gap-2 ">
            <h4 class="font-bold text-rose-50 pb-[8px] border-b-[1px] border-purpleone-600 w-[100%] mx-auto">
              {plan.name}
            </h4>
            <ul class="list-group text-purpleone-50">
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
  