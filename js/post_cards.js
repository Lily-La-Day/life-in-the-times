import { postCardsArray as cards } from "./postCardsData.js";

//Get the grid container.
let content = document.querySelector(".postcards");

//Get the load more postcards button.
let loadMoreButton = document.querySelector(".load-more-cards-btn");

//Get the video tag.
  let video = document.querySelector('.v-play')

//Get the timeLapse postcards button.
let timeLapseButton = document.querySelector(".watch-postcards-btn");

//This is the list of styles for each ten cards when reload the page
const positions = ["side1","side2","side3","side4","side5","side6","side7","side8","side9","side10"];

//  Get the model to insert the image inside the modal.
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");


//Get the model image tag.
var modalImg = document.getElementById("img01");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

let currentIndex = 0;

//Calling loadMore to the show the first ten cards when you load the page.
loadMore();

//When you click the button, it will call the loadMore function.
loadMoreButton.addEventListener("click", loadMore);

// THis function is to show the 30 cards, ten each time.
function loadMore() {
  let maxResult = 10;

  for (let i = 0; i < maxResult; i++) {
 
    /*Adding a new class to the div if the elements are ten.
    This class will make the next ten start from the start of the next column .*/
  const span3= (i+1) % 10 === 0 ? " span3":"";

   $(content).append(
      "<div class='post-prev-img " +  positions[i] + span3 + "'>" +
        "<img class='p-cards' src='" +
        cards[i + currentIndex].img +
        "'  alt='' />" +
        "</div>"
    );
  }
  currentIndex += maxResult;

  // Check if the 30 cards rendered and it will hide the button.
  if (currentIndex >= cards.length) {
    loadMoreButton.innerHTML="Go back to the top 10"
    loadMoreButton.removeEventListener("click",loadMore,false)
    loadMoreButton.addEventListener("click",goBack)

  }
  
  //Get each ten cards after the first load and clicking add event listener to them.
  var img = document.querySelectorAll(".p-cards");
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", showImg);
  }
}

//This function to go back to the first ten cards
function goBack(){
  let img = document.querySelectorAll(".post-prev-img");
  //Go back to the top of the target id
  document.getElementById('top-image').scrollIntoView();

    for (let i = 10; i < img.length; i++) {
      //remove the last 20 cards.
       img[i].remove()
    }
       //let h = document.getElementById("cc").href="#"+firstImageLink; 
      loadMoreButton.innerHTML="Load more postcards"
      loadMoreButton.removeEventListener("click", goBack,false);
      //Reset the currentIndex to 10
      currentIndex=10;
      loadMoreButton.addEventListener("click",loadMore);

}
//This function will view the image.
function showImg() {
  modal.style.display = "block";
  modalImg.src = this.src;

}

// This function is to close the modal when you click x.
span.onclick = function () {
  modal.style.display = "none";
};

//THis function is to close the image model when you click on the space or on the image.
modal.onclick = function () {
  modal.style.display = "none";
};

//THis function is to close the image model when you click on the space or on the image.
span2.onclick = function () {
  modal2.style.display = "none";
};

//THis function is to close the vide model when you click on the space or on the image.
modal2.onclick = function () {
  modal2.style.display = "none";
};

//When you click the button, it will call the loadTimeLapse function.
timeLapseButton.addEventListener("click", loadTimeLapse);

//This variable tracks clicks and ensure to render the video once when you click the button
 let counter = 0

 //loadTimeLapse will append video tag to the modal
function loadTimeLapse() { 
   modal2.style.display = "block";   
  };