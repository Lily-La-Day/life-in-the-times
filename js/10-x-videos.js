let playVideoButtons = document.querySelectorAll(".watch-video");
let modalForVideo = document.querySelector("#modal-for-video");
let closeModal = document.querySelector("#close-modal");
let videocontainer = document.querySelector("#video-container");

playVideoButtons.forEach((element) =>
  element.addEventListener("click", playVideoinPopup)
);

closeModal.onclick = function () {
  modalForVideo.style.display = "none";
  videocontainer.textContent = "";
};

modalForVideo.onclick = function () {
  modalForVideo.style.display = "none";
  videocontainer.textContent = "";
};

function playVideoinPopup(e) {
  let videoId = e.target.dataset.videoid;
  modalForVideo.style.display = "block";
  $(videocontainer).append(`<div id='title-video'>${videoId}</div>`);
  $(videocontainer).append(
    "<video controls class='video-show' >" +
      `<source src='/videos/10-x-videos/${videoId}' type='video/mp4'>` +
      "</video>"
  );
  let vid = document.querySelector(".video-show");
  vid.autoplay = true;
  vid.load();
}

let insideVideoBlocks = document.querySelectorAll(".video-row-of-6 * ");
console.log(insideVideoBlocks);
insideVideoBlocks.forEach((element) =>
  element.addEventListener("mouseover", loopVideo)
);
let videoBlocks = document.querySelectorAll(".video-row-of-6");

videoBlocks.forEach((element) =>
  element.addEventListener("mouseover", loopVideo)
);
function loopVideo(e) {
  let videoId = e.target.dataset.videoid;
  console.log(`you clicked on ${videoId}`);
}
