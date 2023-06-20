import fetch from 'node-fetch'
const API = "https://api.escuelajs.co/api/v1/"

function nodeFetchData(urlApi) {
    return fetch(urlApi)
}

nodeFetchData(`${API}products`).then((data) => {
    return data.json()
}).then((dataJson) => { console.log(dataJson) }).catch((error) => { console.error(error) })