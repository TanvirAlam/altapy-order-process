import React from 'react';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const AppMenu: React.FC = () => {
    return (
        <>
            <nav>
                <Button component={Link} to="/create-orders">Create Order</Button>
                <Button component={Link} to="/view-orders">View Orders</Button>
                <Button component={Link} to="/view-transactions">View Transaction</Button>
            </nav>
        </>
    )
}

export default AppMenu
