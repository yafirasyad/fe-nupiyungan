import axios from 'axios'

export const httpClient = axios.create({
    baseURL: `${process.env.REACT_APP_DEV_API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const isTokenExpired = (err, cb) => {
    if (err === "Expired token") {
        cb()
    }
}