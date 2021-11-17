export interface transactions {}

export interface orderLines {
    id: string,
    code: string,
    description: string,
    quantity: number,
    price: number
}

export default interface OrderData {
    id: string,
    orderAmount: number
    orderLines: {
        [index: number]: orderLines
    },
    settledAmount: number,
    transactions: []
}
