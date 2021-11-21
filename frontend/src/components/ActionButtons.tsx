import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axiosRequest from "../services/axios-request";

const reserveOrder = async (orderId: string) => {
    await axiosRequest.reserveOrder(orderId)
        .then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
}

const releaseOrder = async (orderId: string) => {
    await axiosRequest.releaseOrder(orderId)
        .then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
}

const refundOrder = async (orderId: string) => {
    await axiosRequest.refundOrder(orderId)
        .then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
}

const captureOrder = async (orderId: string) => {
    await axiosRequest.captureOrder(orderId)
        .then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
}

export const ActionButtons = (orderId:any) => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => reserveOrder(orderId.orderId)}>Reserve</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => releaseOrder(orderId.orderId)}>Release</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => refundOrder(orderId.orderId)}>Refund</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" onClick={() => captureOrder(orderId.orderId)}>Capture</Button>
                </Grid>
            </Grid>
        </div>
    );
}
