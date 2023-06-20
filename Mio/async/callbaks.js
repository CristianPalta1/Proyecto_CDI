//TODO: callbak es una funcion que se llama dentro de otra funcion

function persona(nombre) {
    return `Que se dice ${nombre}`
}

function saludar(nombre, callback) {
    return callback(nombre)
}

//TODO: recordar que no es necesario poner parentesis ya que dentro de la funcion se ejecuta la funcion persona
console.log(saludar('Cristian', persona))


function sumar(num1, num2) {
    console.log(`La suma es ${num1 + num2}`)
}

//TODO: El setTimeOut se le puede pasar la funcion que se quiere ejecutar y el tiempo que se quiere que se ejecute ademas de los argumentos que se le deben pasar a la funcion que se va a ejecutar
setTimeout(sumar, 2000, 3, 5)


const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows`)
    } else {
        reject(`Only have ${cows} cows`)
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.error("error", error)
}).finally(() => { console.log("La promesa finalizo sin importar si se ejecuto o no") })


///Fetch usando el navegador para visualizar la respuesta
async function getAllData() {

    async function fetchData() {
        const data = await fetch('https://api.escuelajs.co/api/v1/products')
        const dataJson = await data.json()
        return dataJson
    }
    const data = await fetchData()
    console.log("Promesa", data)
}

getAllData()


///Dependnecia Fetch para realizarlos con node

import fetch from 'node-fetch'
const API = "https://api.escuelajs.co/api/v1/"

function nodeFetchData(urlApi) {
    return fetch(urlApi)
}
function nodeFetchDataPost(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response
}

nodeFetchData(`${API}products`)
    .then((data) => { return data.json() })
    ///TODO: dentro de un response puedo retornar una promesa para poder hacer un then con la data que estoy pidiendo
    .then((products) => {
        return nodeFetchData(`${API}products/${products[0].id}`)
    })
    //TODO: se debe volver a convertir el response a json
    .then((dataProduct) => { return dataProduct.json() })
    .then((product) => {
        return nodeFetchData(`${API}categories/${product.category.id}`)
    })
    .then((dataCategory) => { return dataCategory.json() })
    .then((category) => { console.log(category.name) })
    .catch((error) => { console.error(error) })

//! EL scope solo estaran disponibles dentro de la funcion del then donde se usa esa varibale

nodeFetchDataPost(`${API}products`, 
{ "tite": "Producto 1", 
"description": "Descripcion del producto 1", 
"price": "100", 
"category_id": "1" 
}).then(response => response.json()).then(data => console.log(data))