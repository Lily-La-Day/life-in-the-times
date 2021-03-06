let playVideoButtons = document.querySelectorAll(".watch-video");
let modalForVideo = document.querySelector("#modal-for-video");
let closeModal = document.querySelector("#close-modal");
let videocontainer = document.querySelector("#video-container");
let titleVideo = document.querySelector("#title-video");

playVideoButtons.forEach((element) =>
  element.addEventListener("click", playVideoinPopup)
);

closeModal.onclick = function () {
  modalForVideo.style.display = "none";
  videocontainer.textContent = "";
  titleVideo.textContent = "";
};

modalForVideo.onclick = function () {
  modalForVideo.style.display = "none";
  videocontainer.textContent = "";
  titleVideo.textContent = "";
};

function playVideoinPopup(e) {
  let videoId = e.target.dataset.videoid;
  modalForVideo.style.display = "block";

  $(videocontainer).append(
    `<iframe class='show-video' width='420' height='315' src='https://www.youtube.com/embed/${videoId}?autoplay=1' allow='autoplay'>` +
      "</iframe>"
  );

  titleVideo.textContent = videoId;
  /* let vid = document.querySelector(".video-show");
  vid.autoplay = true;
  vid.load(); */
}

/* let insideVideoBlocks = document.querySelectorAll(".video-row-of-6 * ");
console.log(insideVideoBlocks);
insideVideoBlocks.forEach((element) =>
  element.addEventListener("mouseover", loopVideo)
); */
let videoBlocks = document.querySelectorAll(".video-row-of-6");

videoBlocks.forEach((element) =>
  element.addEventListener("mouseover", loopVideo)
);
function loopVideo(e) {
  console.log(e.target);
  let videoId = e.target.dataset.videoblock;
  console.log(`you clicked on ${videoId}`);
}
