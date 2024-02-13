import { FONTS_STYLES } from '../../styles/fonts';
import { StyledIcon, StyledRatingText } from '../rating/styles';
import { StyledCard, StyledCardHeader } from './styles';

const Card = props => {
	return (
		<StyledCard $position={props.$position}>
			<StyledCardHeader>
				<StyledIcon src={props.avatar} $width={props.$width} radius='2rem' />
				<div>
					<StyledRatingText color={props.color}>{props.name}</StyledRatingText>
					<StyledRatingText
						color={props.$secondaryColor}
						$fontWeight={FONTS_STYLES.$regular}
					>
						{props.status}
					</StyledRatingText>
				</div>
			</StyledCardHeader>
			<div>
				<StyledRatingText
					color={props.color}
					$fontWeight={FONTS_STYLES.$regular}
				>
					{props.description}
				</StyledRatingText>
			</div>
		</StyledCard>
	);
};

export default Card;
