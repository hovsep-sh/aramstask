"use strict";

const images  = document.querySelectorAll(".img"),
      btnPrev = document.querySelector("#prev"),
      btnNext = document.querySelector("#next");

let i = 0;

btnNext.addEventListener("mousedown", (evt) => {
    evt.target.classList.add("mousedown");
});

btnNext.addEventListener("mouseup", (evt) => {
    evt.target.classList.remove("mousedown");
    images[i].classList.toggle("hide");
    i++;
    if(i >= images.length) {
        i = 0;
    }
    images[i].classList.toggle("hide");
});

btnPrev.addEventListener("mousedown", (evt) => {
    evt.target.classList.add("mousedown");
});

btnPrev.addEventListener("mouseup", (evt) => {
    evt.target.classList.remove("mousedown");
    images[i].classList.toggle("hide");
    i--;
    if(i < 0) {
        i = images.length - 1;
    }
    images[i].classList.toggle("hide");
});