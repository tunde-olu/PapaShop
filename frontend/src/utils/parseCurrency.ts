/**
 * Parse number to readable price amount in Naira
 * @param {number} price
 * @returns {string} price in NGN format
 */
const parseCurrency = (price: number): string => {
	return new Intl.NumberFormat('en-NG', {
		currency: 'NGN',
		style: 'currency',
	}).format(price);
};

export default parseCurrency;
