import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID ca152266f2c73ed148961ef48aedf8da05f01fe85afdd2c6d750c684d0cda86e"
  }
});
