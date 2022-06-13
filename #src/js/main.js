// VARS
const INIT_SLICK_ACTIVE = true;
const INIT_BUTTER_ACTIVE = true;

// ON LOAD DOAM
document.addEventListener("DOMContentLoaded", () => {

    if (INIT_SLICK_ACTIVE) initSlick();

    if (INIT_BUTTER_ACTIVE) initButter();
})

// FUNCTIONS
function initSlick() {
    $('.slider').slick({

    });
}

function initButter() {
    butter.init({
        cancelOnTouch: false,
        wrapperDamper: 0.08,
        wrapperId: 'butter',
    });
}
