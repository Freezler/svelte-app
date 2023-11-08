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
  
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each plans as plan (plan.price)}
        <div class="card text-center">
          <div class="card-header">
            <h3 class="text-5xl">
              <span class="currency">$</span>{plan.price}<span class="period">/month</span>
            </h3>
          </div>
          <div class="card-block">
            <h4 class="card-title">
              {plan.name}
            </h4>
            <ul class="list-group">
              {#each plan.features as feature (feature)}
                <li class="list-group-item">{feature}</li>
              {/each}
            </ul>
            <a href="#" class="btn btn-gradient mt-2">Choose Plan</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  