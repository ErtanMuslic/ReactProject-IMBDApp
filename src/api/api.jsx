import axios from "axios"

const imbdApi = axios.create({
    baseURL:"https://imdb-api.com/"
})
export default imbdApi;