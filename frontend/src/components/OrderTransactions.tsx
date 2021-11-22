import React, {Component} from 'react';
import ContextProvider from "../store/ContextProvider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Transaction from "../types/transaction.type";

class OrderTransactions extends Component {
    static contextType = ContextProvider;

    render() {
        let value = this.context;
        return (
            <div>
                {
                    value.transactions.map((transaction: Transaction) => (
                        <Grid item xs key={transaction.id}>
                            <Typography variant="body2" gutterBottom>
                                DATE: {transaction.date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                TYPE: {transaction.type}
                            </Typography>
                        </Grid>
                    ))
                }
            </div>
        );
    }
}

export default OrderTransactions;
