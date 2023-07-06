interface OrderDetails {
    size: string;
    toppings: string;
    delivery: string;
}

export interface Order {
    id: string;
    details: OrderDetails;
}
