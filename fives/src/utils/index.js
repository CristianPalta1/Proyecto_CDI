import axios from 'axios';

export const fetcher = async (url) =>
  await axios
    .get(url, { headers: { 'Content-Type': 'application/json' } })
    .then((res) => res.data);

export const EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);

export const validateEmail = (email) => EMAIL_REGEX.test(email);
