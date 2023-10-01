const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const copyRekeningIcon = document.querySelector(".copy-rekening i");
const openinvitation = document.querySelector(".openinvitation");
const song = document.querySelector("#song");
let isPlaying = false;
let isEnableGiftsContent = false;

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(screenTop, screenLeft);
  };

  rootElement.style.scrollBehavior = "auto";
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  document.body.style.overflow = "visible";
  document.body.style.padding = "0px";
  openinvitation.style.display = "none";

  playAudio();
}

const copyRekening = document.querySelector(".copy-rekening");
const nomorRekening = document.querySelector(".nomor-rekening");
copyRekening.onclick = function () {
  navigator.clipboard.writeText(nomorRekening.innerHTML);
  copyRekening.innerHTML = "Berhasil Disalin";
};

function playAudio() {
  song.volume = 0.1;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false,
});

disableScroll();
