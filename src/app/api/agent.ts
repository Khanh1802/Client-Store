import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://localhost:7113/api/';
const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => request.get('product'),
    details: (id: string) => request.get(`product/${id}`)
}

const TestErrors = {
    get400Error: () => request.get('buggy/bad-found'),
    get401Error: () => request.get('buggy/unauthorized'),
    get404Error: () => request.get('buggy/not-found'),
    get500Error: () => request.get('buggy/server-error'),
    getValidationError: () => request.get('buggy/validationError'),
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;