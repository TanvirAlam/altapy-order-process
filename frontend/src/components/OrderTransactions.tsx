import React from 'react';
import Box from "@mui/material/Box";

const OrderTransactions: React.FC = () => {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
            }}>
                Order Transactions
            </Box>
        </div>
    );
}

export default OrderTransactions;
