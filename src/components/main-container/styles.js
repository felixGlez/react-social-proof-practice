import styled from 'styled-components';

const StyledMainContainer = styled.div`
	display: flex;
	width: 100%;
	max-width: 1440px;
	justify-content: space-between;
	padding: 3rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}
`;
export { StyledMainContainer };
