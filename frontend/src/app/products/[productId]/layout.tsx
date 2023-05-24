import products from '@/mock-data/products';

interface Props {
	params: {
		productId: string;
	};
}

export async function generateMetadata({ params }: Props) {
	const { productId } = params;
	const product = products.find((product) => product._id === productId);
	return {
		title: product?.name,
		description: product?.description,
	};
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
	return children;
}
