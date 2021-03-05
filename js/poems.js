// I've moved the JavaScript into a separate file as this is best practice and it's also easier when working 
// on a project like this as it helps to separate out different sections and prevents conflicts (like the CSS)


// I've added the audio files to an object here rather than in the HTML, we will need to swap these for the real
// translatings and add a seperate one for each poem :) 

const translations = {
  "poem-1": {
    language: 'english',
    english:
      "http://www.culturedub.com/assets/04-Forward.mp3",
    arabic: "audio/poems/poem-1-arabic.m4a",
    urdu:
      "audio/poems/poem-1-urdu.mp3",
    kurdish:
      "audio/poems/poem-1-kurdish.m4a",
  },
}

const initPlayer = () => {

  let lang
  console.log(lang)
  // This is just a Bootstrap tooltip I've added to show "translations" on hover so that the user knows to click 
  $('[data-toggle="tooltip"]').tooltip();

  //On Change funcition to switch langauge
  function change(lang, poem) {
    lang = translations[poem]['language']
    console.log(lang)
  };

  document.querySelectorAll('selection').forEach(el => el.addEventListener('change', function (e) {
    const poem = e.currentTarget.classList[0]
    console.log(poem + "selector")
    change($(this).val(), poem);
  }));

  // This is just reavealing the dropdown 
  document.querySelectorAll('.showLanguages').forEach(el => el.addEventListener('click', (e) => {
    const poem = e.currentTarget.classList[0]
    // console.log(poem)
    // console.log(document.getElementById("audioSelection-poem-1"))
    document.getElementById(`audioSelection-${poem}`).style.display = 'flex'
    document.getElementById(`showLanguages-${poem}`).style.display = 'none'
  }));


  //toggling play/pause and the icon to match

  const togglePlay = (e) => {
    poem = e.currentTarget.classList[0]
    var audio = document.getElementById(`player-${poem}`);
    var source = document.getElementById(`mp3_src-${poem}`);
    var play = document.getElementById(`play-${poem}`)
    // here we access the first class name of the play button we click, which will correspond to the poem key in 
    // the translation object

    console.log(poem)
    //console.log(language)
    source.src = translations[poem][lang];

    if (audio.paused) {
      play.classList.remove('fa-play')
      play.classList.add('fa-pause')
      audio.load();
      audio.play();

    } else {
      play.classList.remove('fa-pause')
      play.classList.add('fa-play')
      audio.pause()
    }

  }

  document.querySelectorAll('.play').forEach(el => el.addEventListener('click', togglePlay))
};

window.addEventListener("DOMContentLoaded", initPlayer);
