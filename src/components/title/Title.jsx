import { StyledTitle } from './styles';

const Title = props => {
	return (
		<StyledTitle $fontWeight={props.$fontWeight} $fontSize={props.$fontSize}>
			{props.text}
		</StyledTitle>
	);
};

export default Title;
