import axios from "axios"
import { baseUrl } from "../../constants"

export default async function loyalty (req, res){    
    try{    
        const response = await axios.get(`https://corporativa3.redesign.roibacktest.com/bookcore/static/loyalty/builds/loyalty.min.js`)
        return res.status(200).json(response.data)
    }catch(error){
      
        return res.status(error.status || 500).end(error.message);
    }
}