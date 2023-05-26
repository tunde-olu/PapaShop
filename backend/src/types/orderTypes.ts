import { Types } from 'mongoose';

export interface IOrderItem {
	name: string;
	qty: number;
	image: string;
	price: number;
	product: Types.ObjectId;
}

export interface IOrder {
	user: Types.ObjectId;
	orderItems: IOrderItem[];
	shippingAddress: {
		address: string;
		city: string;
		postalCode: string;
		country: string;
	};
	paymentMethod: string;
	paymentResult: {
		id: string;
		status: string;
		update_time: string;
		email_address: string;
	};
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
	isPaid: boolean;
	paidAt: Date;
	isDelivered: boolean;
	deliveredAt: Date;
}
