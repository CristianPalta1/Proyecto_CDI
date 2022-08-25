import axios from "axios"
import { baseUrl } from "../../constants"

export default async function chatBot (req, res){    
    const {locale} = req.query
    try{    
        const response = await axios.get(`${baseUrl}/${locale}/json/block-tabs`)
        return res.status(200).json(response.data[0])
    }catch(error){
      
        return res.status(error.status || 500).end(error.message);
    }
}