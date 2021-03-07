import { videoData } from "./ten-x-videos-data.js";
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
  titleVideo.textContent = findTitleByVideoId(videoId);
}

const findTitleByVideoId = (videoId) => {
  let titleVideo = "";
  videoData.forEach((data) => {
    //console.log(videoId, data.videoId, data.videoId === videoId);
    if (data.videoId === videoId) {
      return (titleVideo = data.titleOfVideo);
    }
  });
  return titleVideo;
};
