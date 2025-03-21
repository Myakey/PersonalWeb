const btOpenVideo = document.querySelectorAll('.whales__video-content');
const whalesPopup = document.getElementById('popup');

//swiperrr

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
  });

let swiper2 = new Swiper(".mySwiper2", {
    effect: 'fade',
    loop: 'true',
    thumbs: {
      swiper: swiper,
    },
  });


function openPopup() {
    whalesPopup.classList.add('show-popup');
}

btOpenVideo.forEach((bt) => {bt.addEventListener('click', openPopup)});

const btnCloseVideo = document.getElementById('popup-close');

btnCloseVideo.addEventListener('click', () => {
    whalesPopup.classList.remove('show-popup');
});


const controlImg = document.querySelectorAll('.controls__img');

function ScrollAnimation(){
    gsap.from('.whale__subtitle', {opacity: 0, duration: .2, y: -20, delay: .2});
    gsap.from('.whale__title', {opacity: 0, duration: .3, y: -20, delay: .3});
    gsap.from('.whale__description', {opacity: 0, duration: .4, y: -20, delay: .4});
    gsap.from('.whales__button', {opacity: 0, duration: .4, y: -20, delay: .4});
    gsap.from('.whales__video', {opacity: 0, duration: .4, y: -20, delay: .4});


    whalesPopup.classList.remove('show-popup');
}

controlImg.forEach((img) => {img.addEventListener('click', ScrollAnimation)});