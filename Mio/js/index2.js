// Critical Rendering Path

//     DOM
//     CSSOM



// Se pueden agregar nodos usando 

// 1) appendChild
// 2) append
// 3) insertBefore
// 4) insertAdjacentElement


//******* APPENDCHILD */
// Con appendChild puedo agregar elementos al final de un div o selector. Solo se puede agregar 1 solo nodo
var containerNodo = document.querySelector(".container-nodos-1")
console.log(containerNodo)

var h3 = document.createElement("h3")
h3.textContent = "Como vas"
containerNodo.appendChild(h3)



//******* APPEND */
// Con append puedo crear mas de un nodo, agregar texto, tambien lo pone al final
containerNodo.append("Como vas 2", document.createElement("div"))
///Si IE no soportya se debe buscar el pollifyl para que funcione


//**** INSERTBEFORE */
// Sirve para añadir un elemento antes de esa etiqueta en particular
// // //  .insertBefore(etiqueta, referencia)
/// Solo aplica para hijos
const titulo = document.createElement("h1")
titulo.textContent = "Soy el insertBefore"
const referencia = document.querySelector("div.container-nodos-1 p")
console.log(referencia)
containerNodo.insertBefore(titulo, referencia)


///** INSERTADJANCENTELEMENT */
// insertAdjacentElement tiene 4 metodos
// beforebegin antes de la etiqueta de referencia
// afterbegin lo pone adentro de la etiqueta de referencia pero al inicio del contenido
// beforeend lo pone adentro de la etiqueta de referencia pero al final del contenido
// afterend lo pone luego de la etiqueta de referencia

// // // .insertAdjacentElement('', etiqueta)
const referencia2 = document.querySelector("div.container-nodos-1 p")
const desc = document.createElement("span")
referencia2.insertAdjacentElement("beforebegin", desc)


//// outerHTML  - innerHTML
// outerHTML -> lee la etiqueta y su contenido.
// innerHTML -> escribir y sobrescribe. Entiende html

const parrafo = document.querySelector("#parrafo")
console.log(parrafo.outerHTML)
parrafo.innerHTML = 'Algo nuevo'



//Atributo son utilizados al inicio del HTML
//Lo que se modifique en la vista son las propiedades



///Eliminar elementos del DOM
// 1) removeChild
// 2) remove
// 3) replaceChild

///** REMOVECHILD */
// EtiquetaPadre.removeChild("etiqueta")
const parrafo2 = document.querySelector("#parrafo")
containerNodo.removeChild(parrafo2)


///*** REMOVE */
// Solo con usar remove se quita el hijo. Lo que hace remove es ir al padre busacr el hijo y aplicar removeChild
const parrafo3 = document.querySelector("#parrafo2")
parrafo3.remove()


///*** REPLACECHILD */
// 
var containerNodo2 = document.querySelector(".container-nodos-1")
const parrafo4 = document.querySelector("#parrafo3")
const desc2 = document.createElement("span")
desc2.textContent = "Reemplazo"
containerNodo2.replaceChild(desc2, parrafo4)


//
// Funcion de internalizacion

// sirve para cuadrar hora o moneda

var price = 1.15;

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
}

formatPrice(price);
// agregamos al input ek escuchador de eventos .addEventListener()
// este metodo recibe como 1 parametro que tipo de evento vamos a escuchar

// En el segundo parametro de esta funcion tengo que especificar un listener
// es decir que quiero hacer cuando haya un click agregamos una function

// puede ser una arrow fuction
// funcion anonima
// agregar una funcion ahi mismo

const accionIn = () => {

    console.log('ha sucedio un click')

}

input.addEventListener('click', accionIn)

// tipo de evento input si escribo en el input dispara el evento


input.addEventListener('input', () => {

    console.log('hey')


})

/*

Todos los eventos en nuestra funcion nos va a enviar un parametro que
se llama evento a este parametro no importa el nombre que le asignemos

Pero este evento nos trae mucha informacion a la que podremos acceder 
en conjunto con el punto

*/

input.addEventListener('input', (event) => {

    console.log(event)

    /* Data recibe lo que se digita en el input entonces cuando digitemos p
       se ejecutara el evento y imprimira algo en consola*/
    if (event.data === 'p') {

        console.log('Escribiste una "p"');
    }


})

/* Ahora veremos como eliminar los eventos que hemos agregado para que no
   se acumulen y los podamos controlar atraves de removeAddListener
*/

const email = document.querySelector('email');

// Creamos la funcion que utilizaremos en nuestro escuchador de eventos

const accionUno = () => console.log('accion 1');
const accionDos = () => console.log('accion 2')

/* Podremos agregar mas de dos eventos a un solo elemento
   y se ejecutaran en orden


*/
email.addEventListener('click', accionUno);
email.addEventListener('click', accionDos);

/* 
    Para eliminar una accion utilizamos la funcion .removeEventListener()
    que recibe por parametro el evento y  la accion que vamos a eliminar
    que en este caso es la funcion anonima.


*/
email.removeEventListener('click', accionUno);

/*
    Por eso es recomendable no utilizar funciones anonimas ya que si las 
    quisieramos eliminar  no se podria eliminar

*/


//***** EVENT PROPAGATION */

// Básicamente la propagación de eventos se produce cuando tienes puestos algunos 
// eventos en contenedores que son hijos de otro, por ejemplo:
// La propagacion sucede del elemento mas inteno hacia afuera. El evento se propagara a los padres
// El temino se conoce como bubble

const accionE = (evento) => { console.log(`Hola desde: + ${evento.currentTarget.nodeName}`) }

$0.addEventListener('click', accionE) //Al h2

$0.addEventListener('click', accionE) //Al div

$0.addEventListener('click', accionE) // AL body


$0.addEventListener('click', (evento) => { // Agregación de stopPropagation en H3
    evento.stopPropagation()
    console.log(`Hola desde: + ${evento.currentTarget.nodeName}`)
})


//// Event delegation

// // La delegación de eventos es básicamente un contenedor padre que le pasa el evento a todos sus hijos
// (en realidad no se los está pasando, sino que el contenedor padre sigue estando presente en todos los hijos, 
//     es por eso que cuando clicamos a un hijo el evento es disárado).
// // .
// // Entendiendo esto, cuando obtenemos el target podemos saber cuál elemento hijo del padre fue clicado, 
// por tanto, con una simple condicional puede ver si el elemento clicado es el que yo quiero.
// // .
// //     Ojo: Eso no significa que el evento se quite de los demás elementos hijos, si tu clicas cualquier 
// otro elemento hijo el evento se va a disparar sí o sí, pero lo que sucede es que la condición del tarjet no se cumple, 
// por eso no hace nada.

///Random

const aleatorio = (max, min) => {

    Math.floor(Math.random() * (max - min)) + min
}

/// Interseccion observer
//Cuando el elemento este en el viewport 

const app = document.querySelector('#app');
function nuevaImagen() {


    const image = document.createElement('img');
    image.width = '320';
    image.src = `https://randomfox.ca/images/${aleatorio(120, 1)}.jpg`;
    image.alt = 'cute fox';
    image.className = 'mx-auto rounded';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'p-4';
    imageContainer.append(image);

    return imageContainer
}

const adButton = document.createElement('button');
adButton.textContent = 'Agregar Imagen';
adButton.className = 'Btn';

const accion = (entry) => {
    const element = entry.target;
    const img = element.firstChild;
    const url = imagen.dataset.src;
    img.src = url
    observador.unobserve(element)
}


const observador = new IntersectionObserver((entradas) => {
    //entradas es todo lo que el observador esta poniendo atencion
    //el array entradas filtro por lo que esten dentro del viewport
    entradas.filter(entry => entry.isIntersecting)
        //Pada cada imagen realizo una accion
        .forEach(accion)
})

const imagenEnLaVista = (imagen) => {
    observador.observe(imagen)
}

const addImage = () => {
    const newImage = nuevaImagen();
    app.append(newImage);
    imagenEnLaVista(newImage)
}


adButton.addEventListener('click', addImage);
app.append(container);