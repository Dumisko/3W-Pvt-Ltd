import axios from "axios";

const API = axios.create({
  baseURL: "https://threew-pvt-ltd.onrender.com/api",
});

export default API;
