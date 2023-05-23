import products from '../mock-data/products';
import Product from './components/Products/Product';

const Home = () => {
	return (
		<div className='bg-gray-100'>
			<section className='py-5'>
				<div className='w-11/12 lg:w-10/12 mx-auto max-w-screen-2xl'>
					<h1>Latest Products</h1>
					<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-fr mx-auto '>
						{products.map((product: IProduct) => {
							return <Product product={product} key={product._id} />;
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
