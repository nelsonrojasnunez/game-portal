import axios, { CanceledError } from 'axios';

export default axios.create({
  params: {key:'013247c9c3c348b6b2f500d2ef4c3fc8'},
  baseURL: 'https://api.rawg.io/api',
})

export { CanceledError };