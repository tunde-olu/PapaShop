import { Types } from 'mongoose';

export enum Category {
	Electronics = 'Electronics',
}

export interface IReview {
	name: string;
	rating: number;
	comment: string;
}

export interface IProduct {
	user?: Types.ObjectId;
	name: string;
	image: string;
	brand: string;
	category: Category | string;
	description: string;
	rating: number;
	review?: Array<IReview>;
	numReviews: number;
	price: number;
	countInStock: number;
}
