const data = async(URL) => {
    try{
        const data1 = await fetch(URL)
        //TODO: Puedo hacer mas llamados a otras peticiones esperando el resultado de la primera peticion
        const data2 = await fetch(`${URL}/${data1[0].id}`)
        const data3 = await fetch(`${URL}/${data2.category.id}`)
    }catch(error){
        console.error(error)
    }
}