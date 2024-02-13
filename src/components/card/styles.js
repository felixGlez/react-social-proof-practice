import styled from 'styled-components';

const StyledCard = styled.div`
	background-color: #512051;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem;
	width: 30%;
	border-radius: 1rem;
	margin-top: ${props => props.$position};

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const StyledCardHeader = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;

export { StyledCard, StyledCardHeader };
