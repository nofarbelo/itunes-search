import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/user',
})

const createUser = payload => api.post(`/user`, {payload})

const apis = {
    createUser
}

export default apis