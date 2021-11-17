import React from 'react';
import Box from '@mui/material/Box';
import { Outlet, Link } from "react-router-dom";

const AppMenu: React.FC = () => {
    return (
        <>
            <Box sx={{ width: 500 }}>
                <nav>
                    <Link to="/view-orders">Invoices</Link> |{" "}
                    <Link to="/create-orders">Expenses</Link> |{" "}
                    <Link to="/view-transactions">Expenses</Link>
                </nav>
                <Outlet />
            </Box>
        </>
    )
}

export default AppMenu
