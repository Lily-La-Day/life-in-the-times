

let ul = document.getElementById("list-container");
let items = ul.getElementsByTagName("li");
let langTag = document.getElementById("ex-lang");


ul.addEventListener("click", ulListClick);

let english = "JavaScript is a scripting  orprogramming language that allows\
 you to implement complex features on web pages  every time a web\
  page does more than just sit there and display static information for you."

let arabic = "المادة 2 لكلو أرأي  أو أي رأي آخر، أوالوطني أو الإجتماعي أوأو الميلاد \
   السياسي   حق التمتع بكافة الحقوق  لوطني أو الإجتماعيوالحريات الواردة\
 في هذا الإعلان، دون أي تمييز،و اللو أرأي  أو أي رأي آخر، أوالوطني أو الإجتماعي أوأو الميلاد "

let kurdish = "Her şahsın öğrenim hakkı vardır. Öğrenim hiç olmazsa ilk ve temel safhalarında \
parasızdır. İlk öğretim mecburidir. Teknik ve mesleki öğretimden herkes istifade edebilmelidir. Yüksek ö\
 Öğretim insan şahs saygının kuvvetlenmesini hedef almalıdır.";


let urdu = "Her şahsın öğrenim hakkı vardır. Öğrenim hiç olmazsa ilk ve temel safhalarında \
parasızdır. İlk öğretim mecburidir. Teknik ve mesleki öğretimden herkes istifade edebilmelidir. Yüksek ö\
 Öğretim insan şahs saygının kuvvetlenmesini hedef almalıdır.";



  for (var i = 0; i < items.length; ++i) {
  // do something with items[i], which is a <li> element
  items[i].addEventListener("click", getEventTarget);
  
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

function ulListClick(event) {
    let target = getEventTarget(event);
    let lang = target.innerHTML;
    if(lang === "English") {
        langTag.innerText=english
    } else if(lang === "Arabic") {
        langTag.innerText=arabic
    }else if(lang === "Urdu") {
               langTag.innerText=urdu

    } else if(lang === "Kurdish") {
          langTag.innerText=kurdish
    } else{
         langTag.innerText=english
    }
};




