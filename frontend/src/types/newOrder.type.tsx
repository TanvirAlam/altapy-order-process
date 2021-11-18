export default interface INewOrder {
    orderLines: [
        {
            code: string,
            description: string,
            quantity: number,
            price: number
        }
    ]
}
