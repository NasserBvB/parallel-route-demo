export const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://parallel-route-demo.vercel.app/api'
    : 'http://localhost:3000/api';