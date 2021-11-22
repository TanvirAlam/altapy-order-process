export default interface Transaction {
    id: string,
    amount: number,
    date: Date,
    settledAmount: number,
    type: string
}
