import axios, { CanceledError } from 'axios';


export default axios.create({
  params: {key: import.meta.env.VITE_RAG_IO_API_KEY },
  baseURL: 'https://api.rawg.io/api',
})

export { CanceledError };