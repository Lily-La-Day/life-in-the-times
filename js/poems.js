// I've moved the JavaScript into a separate file as this is best practice and it's also easier when working 
// on a project like this as it helps to separate out different sections and prevents conflicts (like the CSS)


// I've added the audio files to an object here rather than in the HTML, we will need to swap these for the real
// translatings and add a seperate one for each poem :) 
const translations = {
  "poem-1-body": {
  english:
    "http://www.culturedub.com/assets/04-Forward.mp3",
  arabic: "http://www.culturedub.com/assets/04-Forward.mp3",
  urdu:
    "http://www.culturedub.com/assets/04-Moringa-JahYu-Remix-feat-BaNdula-1.mp3",
  kurdish:
    "https://drive.google.com/drive/folders/1vOZ1GoAcPjeiRGh4VivuM-fxnVASy37a",
  }
};

const initPlayer = () => {

var audio = document.getElementById("player");

    var source = document.getElementById("mp3_src");

    // creating a poem variable


    // This is just a Bootstrap tooltip I've added to show "translations" on hover so that the user knows to click 
    $('[data-toggle="tooltip"]').tooltip();

    // playing boolean so we can toggle easily 

    let playing = false
    //Setting the default to English 
    let language = 'english'


    audio.load();

    // The below needs a bit of refactoring to use variable names rather than DOM selectors and we also need to
    // add logic so that this works for different poems and not just one. 

    //On Change funcition to switch langauge
    function change(lang) {
      language = lang

    }

    $("#selection").on("change", function () {
      change($(this).val());
    });

    // This is just reavealing the dropdown 
    document.querySelector('.showLanguages').addEventListener('click', () => {
      document.querySelector('.audioSelection').style.display = 'flex'
      document.querySelector('.showLanguages').style.display = 'none'
    })


    //toggling play/pause and the icon to match

    const togglePlay = (e) => {
      // here we access the first class name of the play button we click, which will correspond to the poem key in 
      // the translation object
      poem = e.currentTarget.classList[0]
      console.log(poem)
      console.log(language)
      source.src = translations[poem][language];

      if (playing == false) {
        document.querySelector('.play').classList.remove('fa-play')
        document.querySelector('.play').classList.add('fa-pause')
        audio.load();
        audio.play();
        playing = true

      } else {
        document.querySelector('.play').classList.remove('fa-pause')
        document.querySelector('.play').classList.add('fa-play')
        audio.pause()
        playing = false
      }
 
    }

  document.querySelector('.play').addEventListener('click', togglePlay)


};

window.addEventListener("DOMContentLoaded", initPlayer);
