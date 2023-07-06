import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../services/hooks.ts';
import {TreeItem, TreeView} from "@mui/lab";
import {Button} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Order} from "../../types/order.ts";
import {RootState} from "../../store/store.ts";


const OrderDetailsTree: React.FC = () => {
    const { id } = useParams<string>();
    const order = useAppSelector((state: RootState) =>
        state.orders.orders.find((order : Order) => order.id === id)
    );

    const handleNextLevel = () => {
        // Handle the next level logic here
        alert('Transfer successful');
    };

    return (
        <div>
            {order ? (
                <div>
                    <h2>Order {order.id}</h2>
                    <TreeView
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}>
                        <TreeItem nodeId="1" label="Size">
                            <TreeItem nodeId="1-1" label={order.details.size} />
                        </TreeItem>
                        <TreeItem nodeId="2" label="Toppings">
                            <TreeItem nodeId="2-1" label={order.details.toppings} />
                        </TreeItem>
                        <TreeItem nodeId="3" label="Delivery">
                            <TreeItem nodeId="3-1" label={order.details.delivery} />
                        </TreeItem>
                    </TreeView>
                    <Button variant="contained" color="primary" onClick={handleNextLevel}>
                        Next Level
                    </Button>
                </div>
            ) : (
                <div>Order not found</div>
            )}
        </div>
    );
};

export default OrderDetailsTree;
