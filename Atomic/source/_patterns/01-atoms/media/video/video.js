
//jQuery play
let $ = jQuery(); 
let buttonPlay = $('.btnPlay')
let buttonPause = $('.btnPause')

buttonPlay.on('click', function(e){
  e.preventDefault()
  video.play(); 
  console.log('play')
  alert("play")
})


buttonPause.on('click', function(e){
  e.preventDefault()
  video.pause(); 
  console.log('pause')
  alert("pause")
})