

export type TUser = {
    branch: string;
    name: string;
    email: string;
    code: string;
    address: string;
    phone: string;
    password: string;
    role: 'superAdmin' | 'customer' | 'admin';
    status: 'in-progress' | 'blocked';
}