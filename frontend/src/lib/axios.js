//create a instance so that we can use throught our application  

import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials:true,                      //want to send cookies with every request
})