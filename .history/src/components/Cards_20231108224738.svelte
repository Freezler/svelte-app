<!-- Include fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">

<style>
  /* Basic */
  body {
    @apply bg-gray-100 font-roboto font-light;
  }

  .row {
    @apply min-h-screen;
  }

  /* Tables */
  .card {
    @apply border-0 shadow-md transition-transform p-9 relative will-change-transform;
    @apply after:content after:absolute after:top-0 after:left-0 after:w-0 after:h-5 after:bg-primary-color after:transition-width-500;
    @apply hover:transform-scale-105 hover:shadow-lg hover:after:w-full;
  }

  .card-header {
    @apply bg-white pl-8 border-b-0;
  }

  .card-title {
    @apply mb-4;
  }

  .card-block {
    @apply pt-0;
  }

  .list-group-item {
    @apply border-0 py-1 text-main-font-color font-main-font-weight;
  }

  /* Price */
  .display-2 {
    @apply text-7xl tracking-wide;
  }

  .currency {
    @apply text-2xl relative font-500 top-neg-11;
  }

  .period {
    @apply text-sm text-lighten-main-font-color;
  }

  /* Buttons */
  .btn {
    @apply uppercase text-xs font-600 text-lighten-main-font-color rounded-lg py-3 px-5 tracking-wide;
  }

  .btn-gradient {
    @apply bg-gray-300 transition-background-300 hover:text-white hover:bg-primary-color;
  }
</style>
