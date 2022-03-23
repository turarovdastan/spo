import axios from "axios";

const instance = axios.create({
  baseURL: "http://109.106.244.198:80/api/",
  withCredentials: true,
  headers: {
    accept: "application/json"
  }
});

export default instance;
