document.addEventListener("DOMContentLoaded", function () {
    function getRandomGrayValue() {
        const min = 130;
        const max = 200; 
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

        return `rgb(${randomValue}, ${randomValue}, ${randomValue})`;
    }



    let elements = document.querySelectorAll(".Scroll");
    if (elements.length > 0) {
      elements.forEach(function (element) {
        element.style.backgroundColor = getRandomGrayValue();
      });
    }
});