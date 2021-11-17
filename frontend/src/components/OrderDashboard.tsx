import React, { useState, useEffect} from 'react';
import axiosRequest from "../services/axios-request";
import IOrder from "../types/order.type";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { BrowserRouter } from "react-router-dom";

import AppMenu from "./AppMenu";

const OrderDashboard: React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [value, setValue] = React.useState(0);

    const getAllOrders = async () => {
        const getOrders = await axiosRequest.getAll();
        if(getOrders) {
            setOrders(getOrders.data);
        }
    };

    useEffect(() => {
        getAllOrders();
    }, []);
    console.log(orders)
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
                <CssBaseline />
                <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
                    {orders.map((order: any) => (
                        <>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={order.id}
                                    secondary={
                                        <React.Fragment>
                                            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                Total Amount: ${order.orderAmount}
                                            </Typography>
                                            {
                                                order.orderLines.map((orderLine: any) => {
                                                    return (
                                                        <>
                                                            <ListItemText
                                                                primary={orderLine.code}
                                                                secondary={
                                                                    <React.Fragment>
                                                                        <Typography sx={{ display: 'inline', marginRight: '2rem' }} component="span" variant="body2" color="text.primary">
                                                                            Quantity: {orderLine.quantity}
                                                                        </Typography>
                                                                        <Typography sx={{ display: 'inline', marginRight: '2rem' }} component="span" variant="body2" color="text.primary">
                                                                            Price: ${orderLine.price}
                                                                        </Typography>
                                                                        <Typography sx={{ display: 'inline', marginRight: '2rem' }} component="span" variant="body2" color="text.primary">
                                                                            Description: {orderLine.description}
                                                                        </Typography>
                                                                        <ButtonGroup variant="text" aria-label="text button group">
                                                                            <Button>Reserve</Button>
                                                                            <Button>Release</Button>
                                                                            <Button>Refund</Button>
                                                                            <Button>Capture</Button>
                                                                        </ButtonGroup>
                                                                    </React.Fragment>
                                                                }
                                                            />
                                                        </>
                                                    )
                                                })
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    ))}
                </List>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation showLabels value={value}>
                        <AppMenu />
                    </BottomNavigation>
                </Paper>
            </Box>
        </div>
    );
}

export default OrderDashboard;
