import axios from "axios";
axios.defaults.timeout = 7000;
import { baseUrl } from '../../constants';

export const getTypesOfRestaurantsAction = async (language_code) => {

    let URL = `${baseUrl}/${language_code}/json/hotel`
    

    const TYPES = {
        typesData:[],
        typesError:true,
    }

    try {
        const res = await axios.get(URL);
        let typesByHotel = res.data;

        if (typesByHotel.length > 0) {
            for (const item in typesByHotel) {
                
                const element = typesByHotel[item];
                const typeId = element?.id     
                let URLrestaurantByType = `${baseUrl}/${language_code}/json/restaurants?hotel=${typeId}`
                let RestArrByType  = await axios.get(URLrestaurantByType)
                                        .then((res)=>{
                                            return res.data.length > 0 ? res.data : []
                                        })
                                        .catch((err)=> console.error('Error en idRelatedNews',err));
                
                RestArrByType.length > 0 ? TYPES.typesData.push(element) 
                                          : null;                  
            }
        }

        TYPES.typesError = false;

    } catch (error) {

        TYPES.typesData = [];
        TYPES.typesError = true;
        console.error(`Error in GetTypeOfRestaurantsAction ${error}`);

    }
    

    return TYPES;
}
