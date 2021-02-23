
import {postCardsArray as cards} from './postCardsData.js';


let content= document.querySelector(".masonry-container");
let loadMoreButton = document.querySelector(".load-more-cards-btn");

let currentIndex=0;
 loadMore()
loadMoreButton.addEventListener("click", loadMore);

function loadMore(){
        
    let maxResult= 10;

    for (let i = 0; i < maxResult; i++) {
        $(content).append(    
            "<div class='col-sm-6 col-md-4 col-lg-4 mb-60 mb-xs-40 '>"+
                "<div class='post-prev-img'>"+
                "<a>"+"<img src='"+ cards[i+currentIndex].img+"'  alt='' />"+"</a>" 
                +"</div></div>"                  
        )   
    }
    currentIndex+=maxResult;

     if(currentIndex >=cards.length){
            $(loadMoreButton).hide();
        }
}

