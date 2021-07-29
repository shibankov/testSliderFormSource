// Import Swiper
import Swiper from 'swiper/bundle';
//Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

window.addEventListener('load',function () {
  //Swiper slider
  const swiper = new Swiper('.swiper-container',{
    direction: 'horizontal',
    speed: 1000,
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 3500,
    },
    centeredSlides: true,
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 80,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  //End Swiper slider

  //Validator form
  let form = document.querySelector('.assembly-popUp__form');
  let inputs = form.querySelectorAll('.assembly-popUp__input');
  let patterns = {
    email:/^.+@.+\..+$/
  };
  form.addEventListener('submit',function (e) {
    e.preventDefault();
    let err = false;
    for (let i = 0;i < inputs.length; i++){
      let inp = inputs[i];
      inp.value = inp.value.trim();
      let pattern = patterns[inp.dataset.valid];
      if(!pattern.test(inp.value)){
        inp.classList.add('еrror');
        err = true;
      }else {
        console.log(inp.value);
        e.target.innerHTML = `<div class="assembly-popUp__thanks">Спасибо!</div>`;
      }
    }
    if(err){
      e.preventDefault();
      if (e.target.classList.contains('assembly-popUp__input')){
        e.target.classList.add('еrror');
      }
    }
  });
  form.addEventListener('focusin',function (e) {
    if (e.target.classList.contains('assembly-popUp__input')){
      e.target.classList.remove('еrror');
    }
  });
  //End validator form
  //Assembly popUp
  let overlay = document.querySelector('.overlay');
  let body = document.querySelector('body');
  let assemblyPopUp = document.querySelector('.assembly-popUp');
  let closePopUp = document.querySelector('.popUp__close-btn');
  let assemblyBtn = document.querySelector('.assembly__btn');
  overlay.addEventListener('click',function (e) {
    overlay.classList.toggle('fade-in-overlay');
    body.classList.toggle('stop-scroll');
    assemblyPopUp.classList.remove('fade-in');
  });
  assemblyBtn.addEventListener('click',function (e) {
    e.preventDefault();
    overlay.classList.add('fade-in-overlay');
    body.classList.add('stop-scroll');
    assemblyPopUp.classList.add('fade-in');
  });
  closePopUp.addEventListener('click',function (e) {
    e.preventDefault();
    overlay.classList.remove('fade-in-overlay');
    body.classList.remove('stop-scroll');
    assemblyPopUp.classList.remove('fade-in');
  });
  //End assembly popUp
});
