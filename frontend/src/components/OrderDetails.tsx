import React, { useState, useEffect } from 'react';
import IOrder from "../types/order.type";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import axiosRequest from "../services/axios-request";
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import {ActionButtons} from './ActionButtons';
import { useParams } from "react-router-dom";
import OrderTransactions from "./OrderTransactions";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const OrderDetails: React.FC = (props) => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const {showFeature} = useParams();

    const getAllOrders = async () => {
        await axiosRequest.getAll()
            .then((res) => {
                setOrders(res.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllOrders();
    }, []);

    return (
        <div>
            {
                orders.length > 0 && orders.map((order: any) => {
                    return (
                        <div key={order.id}>
                            <Divider />
                            <Divider />
                            <Grid container spacing={6}>
                                <Grid item sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <ButtonBase sx={{ width: 128, height: 128 }}>
                                        <Img alt="complex" src={process.env.PUBLIC_URL + '/images/img.png'} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2} sx={{padding: '2rem'}}>
                                        {
                                            order.orderLines.length > 0 && order.orderLines.map((orderLine: any) => {
                                                return (
                                                    <Grid item xs key={orderLine.id}>
                                                        <Typography variant="body2" gutterBottom>
                                                            DESCRIPTION: {orderLine.description}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            ID: {orderLine.code}
                                                        </Typography>
                                                    </Grid>
                                                )
                                            })
                                        }
                                        <Grid item sx={{ display: "flex" }}>
                                            {
                                                showFeature === "orders" ? (<ActionButtons orderId={order.id} />) : (<OrderTransactions />)
                                            }
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" component="div">
                                            ${order.orderAmount}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Divider />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default OrderDetails;
