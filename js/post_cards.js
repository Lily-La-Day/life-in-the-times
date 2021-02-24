
import {postCardsArray as cards} from './postCardsData.js';

//  Grab the cards div container.
let content= document.querySelector(".masonry-container");
//Grab the load more postcards button.
let loadMoreButton = document.querySelector(".load-more-cards-btn");

//  insert the image inside the modal.
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let currentIndex=0;
//Call the load function to load the first ten cards.
 loadMore()
loadMoreButton.addEventListener("click", loadMore);
// Load function for loading the 30 cards
function loadMore(){
    let maxResult= 10;
// This loop append ten cards each time
    for (let i = 0; i < maxResult; i++) {
        $(content).append(    
            "<div class='col-sm-6 col-md-4 col-lg-4 mb-60 mb-xs-40 '>"+
                "<div class='post-prev-img'>"+
                "<div ><img class='p-cards' src='"+ cards[i+currentIndex].img+"'  alt='' /></div>"
                +"</div></div>"                  
        )   
    }
    currentIndex+=maxResult;
   // Check if the 30 cards rendered and it will hide the button.
     if(currentIndex >=cards.length){
            $(loadMoreButton).hide();
        }
        //Get each ten cards after the first load and clicking add event listener to them
     var img = document.querySelectorAll(".p-cards");
     for(let i=0;i<img.length;i++){
     img[i].addEventListener("click", showImg);

}
}

//This function will view the image
 function showImg(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// close the modal function
span.onclick = function() {
  modal.style.display = "none";
}

