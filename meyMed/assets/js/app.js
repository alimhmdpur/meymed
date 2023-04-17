const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // freeMode: true,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true,
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 15,
            // centeredSlides: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: false,
            // centeredSlides: true,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 15,
            centeredSlides: true,
        },
        // 768: {
        //     slidesPerView: 3,
        //     spaceBetween: 15,
        // },
        // when window width is >= 480px
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
            centeredSlides: false,
        },
    },
});
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 25,
    // freeMode: true,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        440: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 4,
            spaceBetween: 15,
            // centeredSlides: true,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
    // freeMode: true,
    // pagination: {
    // clickable: true,
    // },
});
const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    // freeMode: true,
    pagination: {

        clickable: true,
    },
    thumbs: {
        swiper: swiper2,
    },
});

const swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 5,
    spaceBetween: 30,
    // freeMode: true,
    loop: true,
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.2,
            spaceBetween: 3,
        },
        440: {
            slidesPerView: 2.6,
            spaceBetween: 5,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 5,
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 5,
        },
    },
});
const swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 4,
    spaceBetween: 40,
    rewind: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 25,
            centeredSlides: true,
        },
        440: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            centeredSlides: true,
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
    },
});
const swiper6 = new Swiper(".mySwiper6", {
    slidesPerView: 6,
    spaceBetween: 20,
    rewind: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        440: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
        },
        // when window width is >= 480px
        991: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 30,
            centeredSlides: false,
        },
    },
});

function handleThirdSlider() {
    let pageONe = document.querySelector(".slide1");
    let pageTwo = document.querySelector(".slide2");
    let pageThree = document.querySelector(".slide3");
    let pageFour = document.querySelector(".slide4");
    let pageFive = document.querySelector(".slide5");
    let btnOne = document.querySelector(".btn1");
    let btnTwo = document.querySelector(".btn2");
    let btnThree = document.querySelector(".btn3");
    let btnFour = document.querySelector(".btn4");
    let btnFive = document.querySelector(".btn5");
    pageONe.style.display = "block";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    btnOne.addEventListener("click", () => {
        pageONe.style.display = "block";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
    });
    btnTwo.addEventListener("click", () => {
        pageONe.style.display = "none";
        pageTwo.style.display = "block";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
    });
    btnThree.addEventListener("click", () => {
        pageONe.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "block";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
    });
    btnFour.addEventListener("click", () => {
        pageONe.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "block";
        pageFive.style.display = "none";
    });
    btnFive.addEventListener("click", () => {
        pageONe.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "block";
    });
}
handleThirdSlider();
// document.querySelectorAll(".liked").style.display = "none"
function likedProducts() {
    let heart = document.querySelector(".unliked");
    let likeHeart = document.querySelector(".liked");
    // likeHeart.style.display = "none"

    heart.addEventListener("click", () => {
        heart.style.display = "none";
        likeHeart.style.display = "block";
    });

    likeHeart.addEventListener("click", () => {
        likeHeart.style.display = "none";
        heart.style.display = "block";
    });
}
likedProducts();


// Set the date we're counting down to
const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("days").innerHTML = days;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counterDate").innerHTML = "EXPIRED..!";
    }
}, 1000);