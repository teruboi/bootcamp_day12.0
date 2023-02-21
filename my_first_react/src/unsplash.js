//Implement Unsplash API using axios
import axios from 'axios';

export default axios.create({
    //baseURL where the API is
    baseURL: "https://api.unsplash.com",

    //Auth for the key associated with the user API
    headers: {
      Authorization: "Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296"
    },
  })