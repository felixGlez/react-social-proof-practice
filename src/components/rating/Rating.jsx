import {
	StyledIcon,
	StyledRating,
	StyledRatingText,
	StyledIconWrapper
} from './styles';

const Rating = props => {
	return (
		<StyledRating>
			<StyledIconWrapper>
				<StyledIcon src={props['star-icon']} $width={props.$width}></StyledIcon>
				<StyledIcon src={props['star-icon']} $width={props.$width}></StyledIcon>
				<StyledIcon src={props['star-icon']} $width={props.$width}></StyledIcon>
				<StyledIcon src={props['star-icon']} $width={props.$width}></StyledIcon>
				<StyledIcon src={props['star-icon']} $width={props.$width}></StyledIcon>
			</StyledIconWrapper>
			<StyledRatingText color={props.color}>{props.text}</StyledRatingText>
		</StyledRating>
	);
};

export default Rating;
