import axios from 'axios';
import { baseUrl } from '../../constants';


export const getHotels = async (language_code = 'en' ) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/hotel`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getHotelById = async (language_code = 'en', id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/hotel?id_hotel=${id_hotel}`
    );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getScriptsByHotel = async (language_code = 'en', id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/script?id_hotel=${id_hotel}`
    );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};
