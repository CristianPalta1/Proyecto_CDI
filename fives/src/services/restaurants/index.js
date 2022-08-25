import axios from 'axios';
import { baseUrl } from '../../constants';
axios.defaults.timeout = 6000;

export const getRestaurants = async (language_code = `en`) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/restaurants`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRestaurantById = async (language_code, id_restaurant) => {
  
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/specific-restaurant/${id_restaurant}`
    );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getAllRestaurantsById = async (language_code, id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/restaurants?hotel=${id_hotel}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRelatedRestaurantsByHotel = async (
  language_code,
  id_restaurant,
  id_hotel
) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/restaurants?hotel=${id_hotel}&id_restaurant=${id_restaurant}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getTypeofRestaurants = async (language_code) =>{ 
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/type-restaurants`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}