import { v4 } from 'uuid';

export const CARDS_INFO = [
	{
		avatar: './images/image-colton.jpg',
		name: 'Colton Smith',
		status: 'Verified Buyer',
		description:
			'“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
		id: v4(),
		color: '#FFFFFF',
		$secondaryColor: '#EE69A4',
		$position: '0px'
	},
	{
		avatar: './images/image-irene.jpg',
		name: 'Irene Roberts',
		status: 'Verified Buyer',
		description:
			'“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
		id: v4(),
		color: '#FFFFFF',
		$secondaryColor: '#EE69A4',
		$position: '40px'
	},
	{
		avatar: './images/image-anne.jpg',
		name: 'Anne Wallace',
		status: 'Verified Buyer',
		description:
			'“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
		id: v4(),
		color: '#FFFFFF',
		$secondaryColor: '#EE69A4',
		$position: '80px'
	}
];
