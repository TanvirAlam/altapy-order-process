export interface transactions {}

interface IOrderLines {
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
        [index: number]: IOrderLines
    },
    settledAmount: number,
    transactions: []
}
