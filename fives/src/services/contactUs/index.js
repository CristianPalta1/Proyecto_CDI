import axios from 'axios';
import { baseUrl } from '../../constants';
axios.defaults.timeout = 6000;

export const getContactUs = async (language_code = 'en') => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/contact-us`);
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};
export const getSpecialOffersIcons = async (language_code = 'en') => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/contact?the_fives_special_offers`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const getContactUsIcons = async (language_code = 'en') => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/contact?type=the_fives_contact_us`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMapPlaces = async (language_code = 'en') => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/map-place`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMapHotels = async (language_code = 'en') => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/map-hotel`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
