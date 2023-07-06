import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Order } from '../types/order';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get('/orders.json');
    return response.data.data as Order[];
});

interface OrdersState {
    orders: Order[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string;
}

const initialState: OrdersState = {
    orders: [],
    status: 'idle',
    error: '',
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'error fetching orders'
            });
    },
});

export default ordersSlice.reducer;
