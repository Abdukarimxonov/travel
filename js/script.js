function myFunction(x) {
   x.classList.toggle("change");
   document.querySelector(".header__nav").classList.toggle("active");
   document.body.classList.toggle('lock');
   myStop();
}

const mainVideo = document.querySelector(".our-video__video");
const playButton = document.querySelector("#play");

playButton.addEventListener("click", function () {
   mainVideo.play();
   if (mainVideo.classList.contains('played')) {
      mainVideo.pause();
   }
});
mainVideo.addEventListener('ended', myHandler, false);
function myHandler(e) {
   mainVideo.classList.remove('played');
   document.querySelector(".our-video__container").classList.remove('played');
   mainVideo.classList.add('ended');
   document.querySelector(".our-video__container").classList.add('ended');
}
mainVideo.addEventListener('pause', myStop, false);
function myStop(e) {
   mainVideo.classList.remove('played');
   document.querySelector(".our-video__container").classList.remove('played');
   mainVideo.pause();
}
mainVideo.addEventListener('play', myPlay, false);
function myPlay(e) {
   mainVideo.classList.add('played');
   document.querySelector(".our-video__container").classList.add('played');
   mainVideo.classList.remove('ended');
   document.querySelector(".our-video__container").classList.remove('ended');
}