import Rating from '@/app/components/Products/Rating';
import Link from 'next/link';
import Image from 'next/image';
import { parseCurrency } from '@/utils';
import { ImBlocked } from 'react-icons/im';
import axios from 'axios';

interface Props {
	params: {
		productId: string;
	};
}

const fetchProduct = async (productId: string) => {
	// TODO: fix URL
	const data = await axios.get(`http://localhost:8000/api/products/${productId}`);
	return data;
};

const ProductPage = async ({ params }: Props) => {
	const { productId } = params;

	const { data: product } = await fetchProduct(productId);

	const isProductInStock = product?.countInStock > 1;

	return (
		<section className='py-8'>
			<div className='w-11/12 lg:w-10/12 max-w-5xl mx-auto'>
				<Link
					href='/'
					className='bg-gray-200 p-2 shadow-md hover:shadow-lg rounded border border-black transition-all hover:bg-gray-300 duration-300'
				>
					Go Back
				</Link>
				<div className='py-4 flex flex-col md:flex-row gap-10 items-start'>
					<div className='w-4/5 max-w-md aspect-square relative'>
						<Image src={product!.image} alt={product!.name} fill={true} />
					</div>
					<div className='max-w-md md:max-w-sm p-4'>
						<h3 className='font-medium text-2xl md:text-3xl py-2'>{product!.name}</h3>
						<div className='border-t py-2'>
							<Rating
								value={product!.rating}
								text={`${product!.numReviews} reviews`}
							/>
						</div>
						<p className='border-t py-2'>Price: {parseCurrency(product!.price)}</p>
						<p className='border-t text-xs text-gray-500 pt-4'>
							{product!.description}
						</p>
					</div>
					<div className='p-2 border mx-auto w-full max-w-xs lg:w-96 text-xs text-gray-600'>
						<p className='py-2 flex justify-between'>
							Price: <span className=''>{parseCurrency(product!.price)}</span>
						</p>
						<p className='border-t py-2 flex justify-between'>
							Status: <span>{isProductInStock ? 'In Stock' : 'Out of Stock'}</span>
						</p>

						<hr className='mb-2' />
						<button
							className='uppercase bg-black text-white border text-sm text-center py-2 w-full disabled:bg-gray-600 disabled:cursor-not-allowed'
							disabled={!isProductInStock}
						>
							{isProductInStock ? (
								'Add to Cart'
							) : (
								<ImBlocked color='#c04a3dee' className='mx-auto' />
							)}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
