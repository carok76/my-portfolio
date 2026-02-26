document.addEventListener("DOMContentLoaded", function () {
  const images = [
    { id: "pic-weather", colorSrc: "src/weather-app-colour.png", bwSrc: "src/weather-app-bw.png" },
    { id: "pic-weather-mobile", colorSrc: "src/weather-app-colour.png", bwSrc: "src/weather-app-bw.png" },
    { id: "pic-poem", colorSrc: "src/poem-generator-colour.png", bwSrc: "src/poem-generator-bw.png" },
    { id: "pic-poem-mobile", colorSrc: "src/poem-generator-colour.png", bwSrc: "src/poem-generator-bw.png" },
    { id: "pic-recipe", colorSrc: "src/recipe-generator-colour.png", bwSrc: "src/recipe-generator-bw.png" },
    { id: "pic-recipe-mobile", colorSrc: "src/recipe-generator-colour.png", bwSrc: "src/recipe-generator-bw.png" },
    { id: "pic-react", colorSrc: "src/react-weather-app-color.png", bwSrc: "src/react-weather-app-bw.png"},
    { id: "pic-about-mobile", colorSrc: "src/Caro_colour_3.jpg", bwSrc: "src/Caro_bw_3.jpg" },
    { id: "pic-index", colorSrc: "src/Caro_colour_1.jpg", bwSrc: "src/Caro_bw_1.jpg" },
    { id: "pic-about", colorSrc: "src/Caro_colour_3.jpg", bwSrc: "src/Caro_bw_3.jpg" },
    { id: "pic-clock", colorSrc: "src/world-clock-app-colour.png", bwSrc: "src/world-clock-app-bw.png" },
    { id: "pic-clock-mobile", colorSrc: "src/world-clock-app-colour.png", bwSrc: "src/world-clock-app-bw.png" },
    { id: "pic-travel", colorSrc: "src/travel-page-colour.png", bwSrc: "src/travel-page-bw.png" },
    { id: "pic-travel-mobile", colorSrc: "src/travel-page-colour.png", bwSrc: "src/travel-page-bw.png" },
    { id: "pic-dictionary", colorSrc: "src/dictionary-colour.png", bwSrc: "src/dictionary-bw.png" },
    { id: "pic-dictionary-mobile", colorSrc: "src/dictionary-colour.png", bwSrc: "src/dictionary-bw.png" }
  ];

  images.forEach(img => {
    const element = document.getElementById(img.id);
    if (element) {

      element.addEventListener("mouseenter", function () {
        this.src = img.colorSrc;
      });

      element.addEventListener("mouseleave", function () {
        this.src = img.bwSrc;
      });
    } else {
    }
  });
});
