import createHttp from "./BaseServices";

const http = createHttp(true)

export const getCurrentUser = () => http.get('/users/profile')

export const createUser = () => http.post('/user')