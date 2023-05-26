import { Suspense } from 'react';
import Product from './components/Products/Product';
import axios from 'axios';

export const revalidate = 0;

const fetchProduct = async () => {
	// TODO: fix URL
	const data = await axios.get('http://localhost:8000/api/products');
	return data;
};

const Home = async () => {
	const {
		data: { products },
	} = await fetchProduct();

	return (
		<div className='bg-gray-100'>
			<section className='py-5'>
				<div className='w-11/12 lg:w-10/12 mx-auto max-w-screen-2xl'>
					<h1>Latest Products</h1>
					<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-fr mx-auto '>
						{products.length > 1 &&
							products.map((product: IProduct) => {
								return (
									<Suspense fallback={<p>Loading...</p>}>
										<Product product={product} key={product._id} />
									</Suspense>
								);
							})}
					</div>
				</div>
			</section>
		</div>
	);
};

22.58;
17.99;

export default Home;
