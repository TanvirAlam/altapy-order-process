import React, { useState, useEffect} from 'react';
import axiosRequest from "../services/axios-request";
import IOrder from "../types/order.type";

const OrderDashboard: React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);

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

        </div>
    );
}

export default OrderDashboard;
