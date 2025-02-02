import axios from 'axios';

// Create an Axios instance
const httpHeader = axios.create({
  baseURL: process.env.API_URL, 
  withCredentials: true, // Ensure cookies are sent with each request (for session handling)
});

export default httpHeader;
