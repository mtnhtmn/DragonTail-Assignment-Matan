import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/hooks.ts';
import { fetchOrders } from '../../slices/ordersSlice.ts';
import {Grid} from "@mui/material";
import OrderCard from "../OrderCard/OrderCard.tsx";

import styles from './OrderList.module.scss';
import {Order} from "../../types/order.ts";
import {RootState} from "../../store/store.ts";


const OrderList: React.FC = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state: RootState) => state.orders.orders);
    const orderStatus = useAppSelector((state: RootState) => state.orders.status);


    useEffect(() => {
        if (orderStatus === 'idle') {
            dispatch(fetchOrders());
        }
    }, [dispatch, orderStatus]);

    return (
        <Grid container spacing={2} >
            {orderStatus === 'loading' && <div>Loading...</div>}
            {orderStatus === 'succeeded' &&
                orders.map((order: Order) => (
                    <Grid item md={4} xs={12} key={order.id} className={styles.container}>
                        <OrderCard order={order}/>
                    </Grid>
                ))}
            {orderStatus === 'failed' && <div>Error fetching orders</div>}
        </Grid>
    );
};

export default OrderList;
