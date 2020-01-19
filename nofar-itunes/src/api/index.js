import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/api',
})

const insertSearchQuery = payload => api.post(`/query`, {payload})
const getPopularSearchQuery = id => api.get(`/popular/${id}`)

const apis = {
    insertSearchQuery,
    getPopularSearchQuery,
}

export default apis