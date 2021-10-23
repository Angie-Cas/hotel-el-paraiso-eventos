// 1ER SLIDER
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


// 2DO SLIDER

let scrollContainerWrap = document.querySelector(".scroll-container-wrap");
let scrollMargin = window.getComputedStyle(scrollContainerWrap).getPropertyValue("margin-block-start");

function boton1() {
let boton1 = document.querySelector("#slider-pagina-1");
scrollContainerWrap.style.marginBlockStart = "0";
}

function boton2() {
    let boton1 = document.querySelector("#slider-pagina-2");
    scrollContainerWrap.style.marginBlockStart = "-610px"
}

function boton3() {
    let boton1 = document.querySelector("#slider-pagina-3");
    scrollContainerWrap.style.marginBlockStart = "-1220px"
}

function boton4() {
    let boton1 = document.querySelector("#slider-pagina-4");
    scrollContainerWrap.style.marginBlockStart = "-1830px"
}

// 3ER SLIDER

const sliderInst = document.querySelector(".escenarios-slider-container");
let sliderItemInst = document.querySelectorAll(".escenarios-slider-item");
let sliderItemLastInst = sliderItemInst[sliderItemInst.length -1]; 

sliderInst.insertAdjacentElement("afterbegin", sliderItemLastInst);

console.log(sliderItemLastInst)

function NextInst() {
    let sliderItemFirstInst = document.querySelectorAll(".escenarios-slider-item")[0];
    sliderInst.style.marginLeft = "-200%";
    sliderInst.style.transition = "all 1s";
    setTimeout(function () {
        sliderInst.style.transition = "none";
        sliderInst.insertAdjacentElement("beforeend", sliderItemFirstInst);
        sliderInst.style.marginLeft = "-100%";
    }, 1000);
}

setInterval(function() {
    NextInst();
}, 3500);


