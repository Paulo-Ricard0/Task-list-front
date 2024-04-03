import axios from "axios";

const taskFetch = axios.create({
  baseURL: "https://taskcrud-api.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default taskFetch;
