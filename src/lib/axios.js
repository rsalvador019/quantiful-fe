import axios from 'axios';

export const getService = (url) => {
  return axios.get(`${url}`);
};
