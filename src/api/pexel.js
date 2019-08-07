import axios from 'axios';
const API_KEY = 'YOUR_OWN_API_KEY_HERE';
export default axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    authorization: API_KEY
  },
  params: {
    per_page: 15,
    page: 1
  }
});
