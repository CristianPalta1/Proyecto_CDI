import axios from 'axios';
import { baseUrl } from '../../constants';


export const getApiInstagram = async (language_code = 'en') => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/api-instagram`
    );
    return res.data[3];
  } catch (error) {
    console.error(error);
  }
};

export const getApiInstagramById = async (language_code = 'en', id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/api-instagram?hotel=${id_hotel}`
    );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};
