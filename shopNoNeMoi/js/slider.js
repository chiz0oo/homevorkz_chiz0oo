const SLIDES_COUNT = 3;
const SLIDER_ARROW_LEFT = document.querySelector("#slider-arrow-left");
const SLIDER_ARROW_RIGHT = document.querySelector("#slider-arrow-right");

let activeSlide = 1;

function normalizeSlideNumber(slide) {
    if (slide > SLIDES_COUNT) slide -= SLIDES_COUNT;
    else if (slide == 0) slide += SLIDES_COUNT;
    return slide;
}

function changeSlide(direction) {
    if (direction == "left") --activeSlide;
    else ++activeSlide;
    activeSlide = normalizeSlideNumber(activeSlide);
    let prev = normalizeSlideNumber(activeSlide - 1);
    let next = normalizeSlideNumber(activeSlide + 1);
    setTimeout(() => {
        SLIDER_ARROW_LEFT.href = `#slide-${prev}`;
        SLIDER_ARROW_RIGHT.href = `#slide-${next}`;
    }, 10);
}

SLIDER_ARROW_LEFT.addEventListener("click", () => {
    changeSlide("left");
});

SLIDER_ARROW_RIGHT.addEventListener("click", () => {
    changeSlide("right");
});
