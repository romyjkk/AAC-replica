document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector("nav.off-canvas-nav");
    const button = document.querySelector("li.hamburger-icon");

    function showHamburgerMenu() {
        hamburgerMenu.classList.toggle("active");
    }

    button.addEventListener("click", showHamburgerMenu);

});

// sliders
const slider1 = tns({
    container:".slider-container",
    controls: false,
    nav:true,
    navPosition:"bottom",
    speed:700,
    autoplay: true,
    autoPlayTimeout: 5000,
    autoPlayButton: false,
    autoPlayButtonOutput: false,
    autoHeight: true
});

const slider2 = tns({
    container:".slider2",
    axis: "vertical",
    nav: false,
    speed: "700",
    // autoplay: true,
    autoPlayTimeout: 5000,
    autoPlayButton: false,
    autoPlayButtonOutput: false,
    controlsContainer: "#controls",
    prevButton: ".up",
    nextButton: ".down"
});

const slider3 = tns({
    container:".slider3",
    axis:"vertical",
    nav: false,
    speed:"700",
    // autoplay: true,
    autoPlayTimeout: 5000,
    autoPlayButton: false,
    autoPlayButtonOutput: false,
    controlsContainer: "#controls2",
    prevButton: ".up2",
    nextButton: ".down2"
})