import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='w-10/12 mx-auto text-white py-6 flex justify-between gap-x-10 items-center'>
			<Link href='/'>PAPASHOP</Link>
			<ul className='flex gap-x-4 text-gray-300 text-xs '>
				<li className='flex gap-x-1'>
					<ShoppingCartIcon className='h-4' />
					CART
				</li>
				<li className='flex gap-x-1'>
					<UserIcon className='h-4' />
					SIGN IN
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
