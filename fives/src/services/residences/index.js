import axios from 'axios';
import { baseUrl } from '../../constants';

export const getResidences = async (language_code) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/type-room?type=${
        language_code === 'en' ? 'residences' : 'residencias'
      }`
    );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};



export const getResidencesTypeRooms = async (language_code, id) => {
  try {
    const residences = []
    if (language_code === 'es') {
      let residencesEs = await axios.get(`${baseUrl}/${language_code}/json/rooms?type-room=${id}`); 
      residences.push(residencesEs);
    } else {
      let residencesEn = await axios.get(`${baseUrl}/${language_code}/json/rooms?type-room=${id}`); 
      residences.push(residencesEn);
    }

   
    return residences[0].data;
  
  } catch (error) {
    console.error(error);
  }
};
export const getResidencesTypeRoomsHome = async (language_code, id) => {
 
  try {
    const residences = []
    if (language_code === 'es') {
      let residencesEs = await axios.get(`${baseUrl}/${language_code}/json/rooms/${id}`); 
      residences.push(residencesEs);
    } else {
      let residencesEn = await axios.get(`${baseUrl}/${language_code}/json/rooms/${id}`); 
      residences.push(residencesEn);
    }

   
    return residences[0].data;
  
  } catch (error) {
    console.error(error);
  }
};
