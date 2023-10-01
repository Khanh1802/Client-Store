export interface Basket {
    id: string
    buyerId: string
    items: BasketItem[]
}

export interface BasketItem {
    id: string
    quantity: number
    productId: string
    name: string
    price: number
    pictureUrl: string
    type: string
    brand: string
}