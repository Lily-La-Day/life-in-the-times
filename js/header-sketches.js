// document.body.click();

const enterButtons = document.querySelectorAll(".enter");
const enterContainer = document.querySelector(".enter-container");
const whole = document.querySelector(".whole");

enterButtons.forEach((language) =>
  language.addEventListener("click", playAudio)
);

const audio = new Audio("./audio/header/Life in the Time Header_1-2.mp3");

function playAudio() {
  whole.classList.remove("hide");
  enterContainer.classList.add("hide");
  audio.play();
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

const imageSketch = document.querySelector("#home");
imageSketch.style.backgroundImage = `url('images/header-sketches/Header-Sketch-01.jpg')`;
document.querySelector(".audio-icon").addEventListener("click", toggleAudio);
document.querySelector(".audio-icon").addEventListener("click", toggleAudio);

let counter = 1;
function loopSketches() {
  if (counter < 6) {
    setTimeout(function () {
      counter++;
      imageSketch.style.backgroundImage = `url('images/header-sketches/Header-Sketch-0${counter}.jpg')`;
      /*    imageSketch.classList.add("back-sketch"); */
      imageSketch.style.height = "80vh";
      imageSketch.style.backgroundPosition = "fixed";

      loopSketches();
    }, 5000);
  } else {
    counter = 0;
    loopSketches();
  }
}
loopSketches();
