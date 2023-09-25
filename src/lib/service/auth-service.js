import {request} from "../request.js";
import {goto} from "$app/navigation";
const API_SERVER = import.meta.env.VITE_API_SERVER;
export default {

    login: (username, password) => {
        return request('/api/v1/authenticate', {
            method: 'POST',
            body: new URLSearchParams({
                username, password
            })
        })
    },

    loginByOAuth: (provider) => {
        goto(`${API_SERVER}/oauth2/authorization/${provider}`)
    }

}