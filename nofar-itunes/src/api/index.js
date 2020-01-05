import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/api',
})

export const insertSearchQuery = payload => api.post(`/query`, {payload})
export const getPopularSearchQuery = () => api.get(`/popular`)

const apis = {
    insertSearchQuery,
    getPopularSearchQuery,
}

export default apis