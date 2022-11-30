import createHttp from "./BaseServices";

const http = createHttp(false)

export const login = (data) => http.post('/login', data)