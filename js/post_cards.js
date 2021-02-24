import { postCardsArray as cards } from "./postCardsData.js";

let content = document.querySelector(".postcards");
let loadMoreButton = document.querySelector(".load-more-cards-btn");

const positions = ['right-side', 'left-side', 'up-side', 'down-side']
const sizes = ['small-size', 'medium-size', 'large-size']
let currentIndex = 0;
loadMore();
loadMoreButton.addEventListener("click", loadMore);

function loadMore() {
  let maxResult = 10;

  for (let i = 0; i < maxResult; i++) {
    // Here I am generating a number between 0-2/3 to get a random element from the 
    // style arrays above and then applying one size and one position to each added postcard
    const randomClass = positions[Math.floor(Math.random() * (3 + 1))]  
    const randomSize = sizes[Math.floor(Math.random() * (2 + 1))]  
    $(content).append(
      "<div class='post-prev-img " + randomClass + " " + randomSize + "'>" +
        "<a>" +
        "<img src='" +
        cards[i + currentIndex].img +
        "'  alt='' />" +
        "</a>" +
        "</div>"
    );
  }
  currentIndex += maxResult;

  if (currentIndex >= cards.length) {
    $(loadMoreButton).hide();
  }
}
