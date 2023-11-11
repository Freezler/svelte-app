<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
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

    .fab {
      font-family: "Font Awesome 5 Free";
    }
  </style>
  <title>Plans</title>
</head>

<body>
  <script>
    // Define your plans as an array of objects
    const plans = [
      {
        price: "HTML",
        name: "hyperText markup language",
        icon: "fab fa-html5",
        features: [
          "When: Created in 1993",
          "Who: Tim Berners-Lee",
          "What: HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
        ],
      },
      {
        price: "CSS",
        name: "cascading style sheet",
        icon: "fab fa-css3",
        features: [
          "When: Created in 1996",
          "Who: Håkon Wium Lie, Bert Bos",
          "What: CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.",
        ],
      },
      {
        price: "JavaScript",
        name: "JS (JavaScript)",
        icon: "fab fa-js",
        features: [
          "When: Created in 1995",
          "Who: Brendan Eich",
          "What: JavaScript is a high-level, interpreted programming language that enables interactive web pages and web applications.",
        ],
      },
    ];
  </script>

  <div class="antialiased w-full text-center animate-fast-fade-in flex flex-col items-center justify-top">
    <div class="md:pt-28 gap-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-visible w-[400px] sm:w-[500px] md:w-[80%] lg:w-[80%] mx-auto">
      {#each plans as plan (plan.price)}
      <div class="relative cards mt-8 box-shadow-[3px_3px_px_white] text-center] pt-4 rounded-[8px] border-[#9c428f] border-[1px] h-[350px] md:h-[400px] place-self-top md:-translate-y-16">

        <div class="mt-4">
          <h3 class="text-5xl text-purpleone-300">
            <span class="currency"></span>{plan.price}
          </h3>
        </div>
        <div class="grid gap-2 ">
          <h4 class="font-bold text-rose-50 border-b-[1px] border-purpleone-600 w-[80%] mx-auto mb-2">
            <i class="{plan.icon} mr-2"></i>