// VARS
const INIT_SPLIDE_ACTIVE = true;
const INIT_BUTTER_ACTIVE = true;

// ON LOAD DOAM
document.addEventListener("DOMContentLoaded", () => {

    if (INIT_SPLIDE_ACTIVE) initSplide();

    if (INIT_BUTTER_ACTIVE) initButter();
})

// FUNCTIONS
function initSplide() {
    new Splide( '.splide', {
        rewindByDrag: true,
        fixedWidth: "1240px",
        fixedHeight: "600px",
        gap: "100px",
        arrows: false,
        pagination: false,
        drag: "free",
        speed: 50,
    }).mount();
}

function initButter() {
    butter.init({
        cancelOnTouch: false,
        wrapperDamper: 0.08,
        wrapperId: 'butter',
    });
}
