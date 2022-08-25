import axios from 'axios';
import { baseUrl } from '../../constants';
// axios.defaults.timeout = 6000;

export const getRooms = async (language_code = `en`) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/rooms`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRoomById = async (language_code, id_room) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/specific-room/${id_room}`
    );
    return await res.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getHotelRoomById = async (language_code, id_room, id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/rooms?hotel=${id_hotel}&id_room=${id_room}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getTypesRooms = async (language_code) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/type-room`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRoomsByHotelId = async (language_code, id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/rooms?hotel=${id_hotel}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getTypesRoomsByHotel = async (language_code, id_hotel) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/type-room?id_hotel=${id_hotel}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};