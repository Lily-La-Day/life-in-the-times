import { postCardsArray as cards } from "./postCardsData.js";

let content = document.querySelector(".postcards");
let loadMoreButton = document.querySelector(".load-more-cards-btn");

const positions = ["right-side", "left-side", "up-side", "down-side", "center-x", 'center-y'];
const sizes = ["small-size", "medium-size", "large-size"];
//  insert the image inside the modal.
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
let currentIndex = 0;
loadMore();
loadMoreButton.addEventListener("click", loadMore);

function loadMore() {
  let maxResult = 10;

  for (let i = 0; i < maxResult; i++) {
    // Here I am generating a number between 0-2/3 to get a random element from the
    // style arrays above and then applying one size and one position to each added postcard
    const randomPosition = positions[Math.floor(Math.random() * (5 + 1))];
    const randomSize = sizes[Math.floor(Math.random() * (2 + 1))];
    $(content).append(
      "<div class='post-prev-img " +
        randomPosition +
        " " +
        randomSize +
        "'>" +
        "<div ><img class='p-cards' src='" +
        cards[i + currentIndex].img +
        "'  alt='' /></div>" +
        "</div>"
    );
  }
  currentIndex += maxResult;
  // Check if the 30 cards rendered and it will hide the button.
  if (currentIndex >= cards.length) {
    $(loadMoreButton).hide();
  }
  //Get each ten cards after the first load and clicking add event listener to them
  var img = document.querySelectorAll(".p-cards");
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", showImg);
  }
}

//This function will view the image
function showImg() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

// close the modal function
span.onclick = function () {
  modal.style.display = "none";
};

