import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ed0f6513d842a3462c1fbc9e819775b0",
        language: "ko-KR",
    }
})

export default instance;