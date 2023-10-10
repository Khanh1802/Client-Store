import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:7113/api/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => request.get('product'),
    details: (id: string) => request.get(`product/${id}`),
    filterBrands: () => request.get('product/filters')
}

const TestErrors = {
    get400Error: () => request.get('buggy/bad-request'),
    get401Error: () => request.get('buggy/unauthorized'),
    get404Error: () => request.get('buggy/not-found'),
    get500Error: () => request.get('buggy/server-error'),
    getValidationError: () => request.get('buggy/validationError'),
}

const Basket = {
    basket: () => request.get('basket'),
    addItem: (productId: string, quantity = 1) => request.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    deleteItem: (productId: string, quantity = 1) => request.delete(`basket?productId=${productId}&quantity=${quantity}`)
}

const agent = {
    Catalog,
    Basket,
    TestErrors
}

export default agent;