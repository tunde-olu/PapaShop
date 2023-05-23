import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface Props {
	value: number;
	text: string;
	color?: string;
}

const Rating: React.FC<Props> = ({ value, text, color }) => {
	const star = Array.from({ length: 5 }, (_, index) => {
		const halfStar = index + 0.5;
		const render =
			value >= index + 1 ? (
				<BsStarFill size={15} color={color} />
			) : value >= halfStar ? (
				<BsStarHalf size={15} color={color} />
			) : (
				<BsStar size={15} color={color} />
			);
		return render;
	});

	return (
		<div className='flex flex-col md:flex-row gap-1 items-cente'>
			<div className='flex gap-x-1'>{star}</div>
			<span className=' text-gray-500 text-xs md:ml-2'>{text}</span>
		</div>
	);
};

Rating.defaultProps = {
	color: '#f6e30d',
};

export default Rating;
