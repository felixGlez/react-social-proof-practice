import styled from 'styled-components';

const StyledHalfBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50%;
	gap: 10px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export { StyledHalfBox };
