import axios from "axios"
import { baseUrl } from "../../constants"

export default async function covidMeasures (req, res){    
    const {locale} = req.query
    try{    
        const response = await axios.get(`${baseUrl}/${locale}/json/covid-19`)
        return res.status(200).json(response.data[0])
    }catch(error){
      
        return res.status(error.status || 500).end(error.message);
    }
}