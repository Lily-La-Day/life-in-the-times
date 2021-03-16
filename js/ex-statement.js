let items = document.querySelectorAll(".l-list1");
let langTag = document.getElementById("ex-lang");

defaultLanguage();

for (var i = 0; i < items.length; i++) {
  // do something with items[i], which is a <li> element
  items[i].addEventListener("click", onLanguageClick);
}

function defaultLanguage() {
  langTag.style.display="block";
  let tr1 = document.querySelectorAll(".translations-lang")
    for(let i = 0; i< tr1.length-1; i++ ) {
        tr1[i+1].style.display="none"
    }
}

function onLanguageClick(event) {
    let lang = event.target.innerHTML;
    let tr2 = document.querySelectorAll(".translations-lang")
    let pArray=[...tr2]
    let lArr = ["English","Arabic","Urdu", "Kurdish"];
  
    for(let i = 0; i < tr2.length; i++ ) {
        tr2[i].style.display="none";
        if(lArr.indexOf(lang)==i) {
            pArray[i].style.display="block"
              document.querySelector(".statement-title").scrollIntoView();

        }
    }
};
