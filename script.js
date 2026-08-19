/* ==========================================
   K.S BHAI Landing Page
==========================================*/


/* ==========================
   COMMUNITY UPDATE TIMER
========================== */

const targetDate = new Date(
    Date.now() + ((1 * 60 * 60) + (14 * 60) + 44) * 1000
);

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    document.getElementById("days").textContent =
        String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown,1000);



/* ==========================
   BUTTON HOVER EFFECT
========================== */

const telegramButton = document.getElementById("telegramButton");

if (telegramButton) {

    telegramButton.addEventListener("mouseenter", () => {

        telegramButton.style.transform = "scale(1.05)";

    });

    telegramButton.addEventListener("mouseleave", () => {

        telegramButton.style.transform = "scale(1)";

    });

}



/* ==========================
   SCROLL ANIMATION
========================== */

const revealElements = document.querySelectorAll(
".feature-card,.status-card,.countdown-section,.community-info"
);

function revealItems(){

    revealElements.forEach((item)=>{

        if(item.getBoundingClientRect().top < window.innerHeight-80){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealItems);

revealItems();



/* ==========================
   PAGE LOADED
========================== */

window.addEventListener("load",()=>{

    document.body.classList.add("page-loaded");

});
