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
    let splides = document.querySelectorAll(".splide");
    for (let i = 0; i < splides.length; i++) {
        new Splide( splides[i], {
            rewindByDrag: true,
            fixedWidth: "1245px",
            fixedHeight: "700px",
            gap: "100px",
            arrows: false,
            pagination: false,
            drag: "free",
            speed: 50,
        }).mount();
    }
}

function initButter() {
    butter.init({
        cancelOnTouch: false,
        wrapperDamper: 0.08,
        wrapperId: 'butter',
    });
}

function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}

function accordionExpand(e) {
    let current_capt = e;
    let current_content = e.parentNode.querySelector(".li__content");
    let parent = e.parentNode.parentNode;

    let capts = parent.querySelectorAll(".capt");
    for (let i = 0; i < capts.length; i++) {
        if (capts[i] == current_capt) {
            current_content.classList.toggle("active");
            console.log(current_content)

            continue;
        }
        capts[i].parentNode.querySelector(".li__content").classList.remove("active");
        
    }
}
