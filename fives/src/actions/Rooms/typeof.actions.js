import axios from "axios";
axios.defaults.timeout = 7000;
import { baseUrl } from '../../constants';

export const getTypesOfAction = async (language_code, id_hotel) => {

    let URL = `${baseUrl}/${language_code}/json/type-room?id_hotel=${id_hotel}`
    

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
                const typeId = element?.tid     
                let URLroomsByType = `${baseUrl}/${language_code}/json/rooms?hotel=${id_hotel}&type_room=${typeId}`
                let RoomsArrByType  = await axios.get(URLroomsByType)
                                        .then((res)=>{
                                            return res.data.length > 0 ? res.data : []
                                        })
                                        .catch((err)=> console.error('Error en idRelatedNews',err));
                
                RoomsArrByType.length > 0 ? TYPES.typesData.push(element) 
                                          : null;                  
            }
        }

        TYPES.typesError = false;

    } catch (error) {

        TYPES.typesData = [];
        TYPES.typesError = true;
        console.error(`Error in GetActionTypeOf ${error}`);

    }

    return TYPES;
}
