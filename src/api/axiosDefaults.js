import axios from "axios";

axios.defaults.baseURL = 'https://productive-app-060b4c85d875.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;