// VARS
const INIT_SPLIDE_ACTIVE = true;
const INIT_BUTTER_ACTIVE = true;
const CUSTOM_CURSOR_ACTIVE = true;

// ON LOAD DOAM
document.addEventListener("DOMContentLoaded", () => {

    if (INIT_SPLIDE_ACTIVE) initSplide();

    if (INIT_BUTTER_ACTIVE) initButter();

    if (CUSTOM_CURSOR_ACTIVE) cursorInit();
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
        if (capts[i] == current_capt && !capts[i].classList.contains("lock")) {
            current_content.classList.toggle("active");
            console.log(current_content)

            continue;
        }
        capts[i].parentNode.querySelector(".li__content").classList.remove("active");
        
    }
}

function cursorInit() {
    var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: false,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        
        init: function() {
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;
            
            this.setupEventListeners();
            this.animateDotOutline();
        },

        setupEventListeners: function() {
            var self = this;
            
            document.addEventListener('mousedown', function() {
                self.cursorEnlarged = true;
                // self.toggleCursorSize();
            });
            document.addEventListener('mouseup', function() {
                self.cursorEnlarged = false;
                // self.toggleCursorSize();
            })
    
            document.addEventListener('mousemove', function(e) {
                self.cursorVisible = true;

                self.endX = e.clientX;
                self.endY = e.clientY;
                self.$dot.style.top = self.endY + 'px';
                self.$dot.style.left = self.endX + 'px';
            });

            document.querySelectorAll(".custom-cursor").forEach(function(el) {
                el.addEventListener('mouseenter', function(e) {
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();
                    self.$dot.style.opacity = 1;
                    self.$outline.style.opacity = 1;
                });
                el.addEventListener('mouseleave', function(e) {
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();
                    self.$dot.style.opacity = 0;
                    self.$outline.style.opacity = 0;
                });
            })
        },
        
        animateDotOutline: function() {
            var self = this;
            
            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + 'px';
            self.$outline.style.left = self._x + 'px';
            
            requestAnimationFrame(this.animateDotOutline.bind(self));
        },
        
        toggleCursorSize: function() {
            var self = this;
            
            if (self.cursorEnlarged) {
                self.$outline.style.transform = 'translate(-50%, -50%) scale(0.7)';
            } else {
                self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        },
        
        toggleCursorVisibility: function() {
            var self = this;

            if (self.cursorVisible) {
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            } else {
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            }
        }
    }
    cursor.init();
}

function copyText(e) {

    let dot__title = document.querySelector(".dot__title");
    let text = "geotaderyx.tdv@gmail.com";
    navigator.clipboard.writeText(text)
        .then(() => {
            dot__title.innerHTML = "Done!";
            setTimeout(() => dot__title.innerHTML = "Copy", 2000)
        })
        .catch(err => {
            console.log('error: ', err)
        })
}