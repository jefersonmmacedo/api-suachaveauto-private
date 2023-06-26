const axios = require('axios');

export const apiFipe = axios.create({
  baseURL: 'https://api.placafipe.xyz'
});

