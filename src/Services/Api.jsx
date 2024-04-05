

import axios from "axios";

const api = axios.create({
  baseURL: "https://eic-agenda.azurewebsites.net/",
});

export default api;