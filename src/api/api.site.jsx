import axios from 'axios'

const config = {
    baseURL : 'http://tecno-start-api.herokuapp.com/v1/api/'
}

export const apiPublica = axios.create(config)
export const apiPrivado = axios.create(config)

apiPrivado.interceptors.request.use(request => {
    request.headers={
        Authorization: localStorage.getItem('token')
    }
    return request
})