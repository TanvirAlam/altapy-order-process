import React, { Component } from 'react';
import IOrder from "../types/order.type";
type Props = {};

type State = IOrder & {
    submitted: boolean
}

export default class OrderTransactions extends Component<Props, State> {
    render() {
        return (
            <div>
                Order Transactions
            </div>
        );
    }
}
