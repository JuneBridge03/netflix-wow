import axios from "axios";
import api_key from "./apikey";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: api_key,
        language: "ko-KR",
    }
});

export default instance;