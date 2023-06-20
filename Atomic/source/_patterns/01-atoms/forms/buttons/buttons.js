//Vanilla
let button = document.querySelector('.button')

button.addEventListener('click', function(e){
  e.preventDefault()
  console.log('click')
})


//jQuery
let $ = jQuery(); 
let buttonQuery = $('.button')

buttonQuery.on('click', function(e){
  e.preventDefault()
  console.log('click')
})