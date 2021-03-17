// I've moved the JavaScript into a separate file as this is best practice and it's also easier when working 
// on a project like this as it helps to separate out different sections and prevents conflicts (like the CSS)


// I've added the audio files to an object here rather than in the HTML, we will need to swap these for the real
// translatings and add a seperate one for each poem :) 

const translations = {
  "poem-1": {
    language: "audio/poems/poem-1-arabic.m4a",
    arabic: "audio/poems/poem-1-arabic.m4a",
    urdu:
      "audio/poems/poem-1-urdu.mp3",
    kurdish:
      "audio/poems/poem-1-kurdish.m4a",
  },
  "poem-2": {
    language: 'english',
    arabic: "audio/poems/poem-2-arabic.m4a",
    urdu:
      "audio/poems/poem-2-urdu.mp3",
    kurdish:
      "audio/poems/poem-2-kurdish.m4a",
  },
  "poem-3": {
    language: 'english',
    arabic: "audio/poems/poem-3-arabic.m4a",
    urdu:
      "audio/poems/poem-3-urdu.mp3",
    kurdish:
      "audio/poems/poem-3-kurdish.m4a",
  },
  "poem-4": {
    language: 'english',
    arabic: "audio/poems/poem-4-arabic.m4a",
    urdu:
      "audio/poems/poem-4-urdu.mp3",
    kurdish:
      "audio/poems/poem-4-kurdish.m4a",
  },
}

const initPlayer = () => {

  //On Change funcition to switch langauge
  function change(lang, poem) {
    translations[poem]['language'] = lang
  }

  document.querySelectorAll('#selection').forEach(el => el.addEventListener('change', function (e) {
    const poem = e.currentTarget.classList[0]
    change($(this).val(), poem);
  }));

  // This is just reavealing the dropdown 
  document.querySelectorAll('.showLanguages').forEach(el => el.addEventListener('click', (e) => {
    const poem = e.currentTarget.classList[0]
    // document.getElementById(`audioSelection-${poem}`).style.display = 'flex'
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

    const lang = translations[poem]['language']
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
