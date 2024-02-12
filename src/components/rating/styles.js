import styled from 'styled-components';

const StyledRating = styled.div`
	display: flex;
	background-color: #f7f2f7;
	justify-content: center;
	align-items: center;
	padding: 0px 30px;
	border-radius: 15px;
	gap: 20px;
	padding: 20px;
`;

const StyledRatingText = styled.h3`
	color: ${props => props.color};
	font-weight: ${props => props.$fontWeight};
	margin: 0;
`;

const StyledIcon = styled.img`
	width: ${props => props.$width};
	border-radius: ${props => props.radius};
`;

const StyledIconWrapper = styled.div`
	display: flex;
`;

export { StyledRating, StyledRatingText, StyledIcon, StyledIconWrapper };
