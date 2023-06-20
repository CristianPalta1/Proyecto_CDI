const { createMobeusChannel } = require("./createChannel")



function hola(){
    createMobeusChannel()

}
hola()
function adios(nombre, miCallback){
   
    setTimeout(function(){
        console.log(`Adios ${nombre}`)
        miCallback()
    }, 1000)
}




