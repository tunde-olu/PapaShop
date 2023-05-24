import Image from 'next/image';
import Link from 'next/link';
import Rating from './Rating';
import { parseCurrency } from '@/utils';

interface Props {
	product: IProduct;
}

const Product = ({ product }: Props) => {
	return (
		<Link
			href={`/products/${product._id}`}
			className=' p-3 border bg-slate-50 rounded-md hover:scale-105 transition-all duration-500 mt-5 shadow-sm hover:shadow-md'
		>
			<div className='flex flex-col gap-4 '>
				<Image src={product.image} width={400} height={400} alt='product' />
				<div className='p-2 md:p-4 space-y-4'>
					<h2 className='text-sm lg:text-base font-semibold leading-5'>{product.name}</h2>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
						color={undefined}
					/>
					<h3 className='text-sm lg:text-base'>{parseCurrency(product.price)}</h3>
				</div>
			</div>
		</Link>
	);
};

export default Product;
