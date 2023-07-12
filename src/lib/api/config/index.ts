import axios from 'axios';

export const public_api_url = 'https://bloggy.kro.kr/api';

export const api = axios.create({
  baseURL: public_api_url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiPrivate = axios.create({
  baseURL: public_api_url,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
