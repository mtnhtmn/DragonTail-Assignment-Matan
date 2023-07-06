import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {Order} from "../../types/order.ts";

interface OrderCardProps {
    order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({order}) => {
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    <Link to={`/order/${order.id}`}>Order {order.id}</Link>
                </Typography>


                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eos ex fugit in iure, libero minima
                    minus modi necessitatibus neque nesciunt provident qui quisquam soluta tempore vero, vitae. Aperiam,
                    harum!
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                    <Link to={`/order/${order.id}`}>
                        <Button size="small">Order {order.id}</Button>
                    </Link>
            </CardActions>
        </Card>
    );
}

export default OrderCard;