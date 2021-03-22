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
  document.addEventListener(
    "scroll",
    function () {
      audio.pause();
      document.querySelector(".audio-icon").src =
        "../life-in-the-times/images/audio-icon-hero-crossed.png";
    },
    { once: true }
  );
}

function toggleAudio() {
  if (audio.paused) {
    document.querySelector(".audio-icon").src =
      "../life-in-the-times/images/audio-icon-hero.png";
    audio.play();
  } else {
    document.querySelector(".audio-icon").src =
      "../life-in-the-times/images/audio-icon-hero-crossed.png";
    audio.pause();
  }
}

const imageSketch = document.querySelector("#home");
imageSketch.style.backgroundImage = `url('images/header-sketches/Header-Sketch-01.png')`;
document.querySelector(".audio-icon").addEventListener("click", toggleAudio);

let counter = 1;
function loopSketches() {
  if (counter < 6) {
    setTimeout(function () {
      counter++;
      imageSketch.style.backgroundImage = `url('images/header-sketches/Header-Sketch-0${counter}.png')`;
      imageSketch.classList.add("back-sketch");
      imageSketch.style.backgroundPosition = "fixed";

      loopSketches();
    }, 7000);
  } else {
    counter = 0;
    loopSketches();
  }
}
loopSketches();
