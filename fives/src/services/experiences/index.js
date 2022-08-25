import axios from 'axios';
import { baseUrl } from '../../constants';
// axios.defaults.timeout = 6000;

export const getExperiences = async (language_code) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/experiences`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getExperience = async (language_code, id_experience) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/specific-experience/${id_experience}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getHotelExperienceById = async (
  language_code,
  id_experience,
  id_hotel
) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/experience?hotel=${id_hotel}&id_experience=${id_experience}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getExperiencesByHotel = async (language_code, id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/experiences?hotel=${id_hotel}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getExternalExperiences = async (language_code) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/external-experiences`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getExternalExperiencesByHotel = async (language_code, id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/external-experiences?hotel=${id_hotel}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRelatedExternalExperiences = async (language_code, id_hotel, id_experience) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/external-experiences?hotel=${id_hotel}&id_experience=${id_experience}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRelatedInteralExperiences = async (language_code, id_hotel, id_experience) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/experiences?hotel=${id_hotel}&id_experience=${id_experience}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getSpecificExternalExperience = async (language_code, id_experience ) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/specific-external-experience/${id_experience}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getAllEvents= async (language_code) => {
  try {

    const res = await axios.get(
      `${baseUrl}/${language_code}/json/all-events`      
      );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRelatedEvents= async (language_code, id_hotel ,id_event) => {
  try {

    const res = await axios.get(
      `${baseUrl}/${language_code}/json/all-events?hotel=${id_hotel}&id_event=${id_event}`      
      );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getSpecificEvent= async (language_code, id_event) => {
  try {

    const res = await axios.get(
      `${baseUrl}/${language_code}/json/specific-event/${id_event}`      
      );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getEventsByHotelId= async (language_code, id_hotel) => {
  try {

    const res = await axios.get(
      `${baseUrl}/${language_code}/json/all-events?hotel=${id_hotel}`
    );

   
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllTypeOfExperiences = async (language_code = `en`) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/all-experiences`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTypeOfExperiences = async (language_code) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/type-experience`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllTypeOfExperiencesByHotel = async (language_code, id_hotel) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/all-experiences?hotel=${id_hotel}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
