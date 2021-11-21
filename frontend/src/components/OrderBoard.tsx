import React, {Component} from 'react';
import Box from "@mui/material/Box";
import {Navigate, Route, Routes} from "react-router-dom";
import OrderDetails from "./OrderDetails";
import OrderForm from "./OrderForm";
import Paper from '@mui/material/Paper';

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
                    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 700, flexGrow: 1}}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/view-orders/orders" />} />
                            <Route path="/create-orders" element={<OrderForm />} />
                            <Route path="/view-orders/:showFeature" element={<OrderDetails />} />
                            <Route path="/view-orders/:showFeature" element={<OrderDetails />} />
                        </Routes>
                    </Paper>
                </Box>
            </div>
        );
    }
}

export default OrderBoard;
