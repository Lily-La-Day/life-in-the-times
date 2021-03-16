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
var span = document.querySelector("#close");
var span2 = document.querySelector("#close2");

let currentIndex = 0;

//Calling loadMore to the show the first ten cards when you load the page.
loadMore();

//When you click the button, it will call the loadMore function.
loadMoreButton.addEventListener("click", loadMore);

// This function is to show the 30 cards, ten each time.
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
  if (currentIndex >= cards.length-1) {
    loadMoreButton.innerHTML="Close"
    loadMoreButton.removeEventListener("click",loadMore,false)
    loadMoreButton.addEventListener("click",goBack)

  }
  
  //Get each ten cards after the first load and clicking add event listener to them.
  var img = document.querySelectorAll(".p-cards");
  for (let i = 0; i < img.length; i++) {
    if(i==7 ) {
       img[i].addEventListener("click", showOtherImg);
    } else {
      img[i].addEventListener("click", showImg);
    }
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
      loadMoreButton.innerHTML="Load more Postcards"
      loadMoreButton.removeEventListener("click", goBack,false);
      //Reset the currentIndex to 10
      currentIndex=10;
      loadMoreButton.addEventListener("click",loadMore);

}

//This function with show a different image for the card number 8 in the first 10.
function showOtherImg () {
      modal.style.display = "block";
      modalImg.src = cards[cards.length-1].img;
}
//This function will view the image.
function showImg() {
     modal.style.display = "block";
     modalImg.src =this.src;
  }


// This function is to close the modal when you click x.
span.onclick = function () {
  modal.style.display = "none";
};

//THis function is to close the image model when you click on the space or on the image.
modal.onclick = function () {
  modal.style.display = "none";
};

//This function is to close the image model when you click on the space or on the image.
span2.addEventListener("click",closeVideo)
//This function is to close the vide0 model when you click on the space or on the image.
modal2.addEventListener("click",closeVideo)

//This function closes the video play when click in the space or on the x 
function closeVideo() {
     modal2.style.display = "none";
     let c = document.getElementById("v-close");
     c.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
}
//When you click the button, it will call the loadTimeLapse function.
timeLapseButton.addEventListener("click", loadTimeLapse);


 //loadTimeLapse will append video tag to the modal
function loadTimeLapse() { 
   modal2.style.display = "block";   
  };