import axios from 'axios';
import { baseUrl } from '../../constants';
axios.defaults.timeout = 6000;

export const getSpecialOffers = async (language_code = 'en') => {

  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/special-offers`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getRelatedSpecialOffers = async (language_code = 'en', id) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/special-offers?id_current=${id}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};