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
  
  <div class="grid grid-cols-1 p-2  h-[100%]  mt-2 overflow-scroll">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 h-[100%] overflow-scroll w-[70%] mx-auto">
      {#each plans as plan (plan.price)}
        <div class="text-center bg-purpleone-300 bg-opacity-40 p-4 rounded-[8px] overflow-scroll">
          <div class="">
            <h3 class="text-5xl text-purpleone-300">
              <span class="currency">$</span>{plan.price}<span class="period">/month</span>
            </h3>
          </div>
          <div class="grid gap-2 ">
            <h4 class="font-bold text-rose-50 pb-[8px] border-b-[1px] border-purpleone-600 w-[80%] mx-auto">
              {plan.name}
            </h4>
            <ul class="list-group">
              {#each plan.features as feature (feature)}
                <li class="list-group-item">{feature}</li>
              {/each}
            </ul>
            <a href="#blank" class="bg-red-200 text-white py-2 px-4 border-[1px] rounded-[8px]">Choose Plan</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  