const songsAmbient = [
  {
    title : "forgive feat. re:plus",
    artist : "★STAR GUiTAR",
    data : "https://www.youtube.com/watch?v=_7JGFH-pNBQ"
  },
  {
    title : "Everlasting Truth",
    artist : "re:plus",
    data : "https://www.youtube.com/watch?v=LMPnEmzhX_k"
  },
  {
    title : "Nighttime",
    artist : "re:plus",
    data : "https://www.youtube.com/watch?v=2irCLNsgkwM"
  },
  {
    title : "Sasanqua",
    artist : "physis, re:plus",
    data : "https://www.youtube.com/watch?v=ZxCS6PCGwkw"
  },
  {
    title : "After the Wind",
    artist : "DJ OKAWARI",
    data : "https://www.youtube.com/watch?v=_rCJ1x23uVk"
  },
  {
    title : "Perfect Blue",
    artist : "DJ OKAWARI",
    data : "https://www.youtube.com/watch?v=UjLnvXpkq68"
  },
  {
    title : "Engage Ring",
    artist : "DJ OKAWARI, Emily Styler",
    data : "https://www.youtube.com/watch?v=0P1bWEWY7co"
  },
  {
    title : "newdays",
    artist : "Schroeder-Headz",
    data : "https://www.youtube.com/watch?v=srXbgeoHa-g"
  },
]

const songsHealing = [
  {
    title : "Evening's Soft Glow",
    artist : "Tim Janis",
    data : "https://www.youtube.com/watch?v=qZvERERc-Z4"
  },
  {
    title : "Diamonds on the Water",
    artist : "Enya",
    data : "https://www.youtube.com/watch?v=8_PpxLxnEUg"
  },
  {
    title : "永遠の絆",
    artist : "Libera",
    data : "https://www.youtube.com/watch?v=HZEyybuUnyQ"
  },
  {
    title : "Angel",
    artist : "Libera",
    data : "https://www.youtube.com/watch?v=_MzJ0vWEO0o"
  },
  {
    title : "Kiss The Rain (Orchestra Version)",
    artist : "Yiruma",
    data : "https://www.youtube.com/watch?v=1e07OAWvWkQ"
  },
]

window.addEventListener('DOMContentLoaded', () => {
  const ambLink = document.getElementById('songRefAmbient')
  var ambIndex = getRandomInt(songsAmbient.length)
  ambLink.href = songsAmbient[ambIndex].data
  ambLink.innerHTML = ambLink.innerHTML + ' - ' + songsAmbient[ambIndex].title + ' / ' + songsAmbient[ambIndex].artist

  const heaLink = document.getElementById('songRefHealing')
  var heaIndex = getRandomInt(songsHealing.length)
  heaLink.href = songsHealing[heaIndex].data
  heaLink.innerHTML = heaLink.innerHTML + ' - ' + songsHealing[heaIndex].title + ' / ' + songsHealing[heaIndex].artist
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}