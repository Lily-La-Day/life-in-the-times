document.body.click();
document.body.addEventListener("click", playAudio);

function playAudio() {
  new Audio("./audio/header/Life in the Time Header_1-2.mp3").play();
}

const imageSketch = document.querySelector("#home");
imageSketch.style.backgroundImage = `url('images/header-sketches/Header-Sketch-01.jpg')`;

let counter = 1;
function loopSketches() {
  if (counter < 6) {
    setTimeout(function () {
      counter++;
      //console.log(counter);
      imageSketch.style.backgroundImage = `url('images/header-sketches/Header-Sketch-0${counter}.jpg')`;

      loopSketches();
    }, 5000);
  } else {
    counter = 0;
    loopSketches();
  }
}
loopSketches();
