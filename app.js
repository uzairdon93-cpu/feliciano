const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


const swiper = new Swiper(".heroSwiper", {

    loop: true,

    effect: "fade",

    fadeEffect: {
        crossFade: true,
    },

    speed: 1200,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});


function counter(id, target) {
    let count = 0
    let speed = target / 200

    let update = setInterval(function () {
        count += speed

        if (count >= target) {
            count = target
            clearInterval(update)
        }
        document.getElementById(id).innerText = Math.floor(count)
    }, 20)
}
counter("Experienced", 18)
counter("Menus", 100)
counter("Staffs", 50)
counter("Customers", 15000)


const buttons = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".menu-card");

// Function
function filterMenu(filter) {
    cards.forEach(card => {
        if (card.classList.contains(filter)) {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
}

// Default Filter (Page Load)
filterMenu("allmenu");

// Button Click
buttons.forEach(button => {
    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        filterMenu(this.dataset.filter);
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("ContactForm");
    const msg = document.getElementById("successMsg");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // reload rokta hai

        msg.style.display = "block"; // message show

        form.reset(); // form clear
    });

});


document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        spacebetween: 30,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3
            }
        }
    });
});


function subscribe() {
    let email1 = document.getElementById("email1").value;
    if (email1 === "") {
        alert("Please fill this email");
    }
    else {
        alert("Thanksfull for subscribe!");
    }
}


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Message Sent Successfully!");

    document.getElementById("successMsg").style.display = "block";

    // Form Reset
    form.reset();
});

