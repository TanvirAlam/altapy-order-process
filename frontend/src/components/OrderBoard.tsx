import React, {Component} from 'react';
import Box from "@mui/material/Box";
import {Navigate, Route, Routes} from "react-router-dom";
import OrderDetails from "./OrderDetails";
import OrderForm from "./OrderForm";
import OrderTransactions from "./OrderTransactions";

class OrderBoard extends Component {
    render() {
        return (
            <div>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                    padding: '2rem',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/view-orders" />} />
                        <Route path="/view-orders" element={<OrderDetails />} />
                        <Route path="/create-orders" element={<OrderForm />} />
                        <Route path="/view-transactions" element={<OrderTransactions />} />
                    </Routes>
                </Box>
            </div>
        );
    }
}

export default OrderBoard;
