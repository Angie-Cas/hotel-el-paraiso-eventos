const slider = document.querySelector(".movil-slider-wrap");
let sliderItem = document.querySelectorAll(".movil-slider-item");
let sliderItemLast = sliderItem[sliderItem.length - 1];

slider.insertAdjacentElement("afterbegin", sliderItemLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".movil-slider-item")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

setInterval(function() {
    Next();
}, 3500);


