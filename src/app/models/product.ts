export interface Product {
    id: string
    name: string
    description: string
    price: number
    pictureUrl: string
    type: string
    brand: string
    quantityInStock: number
}

export interface FilterProduct {
    brands: string[],
    types: string[],
}

export interface ProductParam {
    orderBy: string,
    search?: string,
    brands?: string[],
    types?: string[],
    pageNumber: number,
    pageSize: number
}
