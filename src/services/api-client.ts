import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api/',
    params : {
        key : 'ea151973c2d74623aa1f91093b60fb9d'
    }
})