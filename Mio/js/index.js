var swiper = new Swiper(".pruebaSwipe", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

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


///

const accion = () => {
    console.log("Eventos")
}


document.addEventListener("click", accion)