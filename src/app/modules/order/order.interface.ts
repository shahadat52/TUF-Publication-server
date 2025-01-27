
export type TProducts = {
    name: string;
    category: string;
    productId: string;
    price: number;
    quantity: number;
    total: number
};

export type TOrder = {
    branchName: string;
    address: string;
    products: [TProducts];
    totalPrice: number;
    status: string;
    phone: string
}