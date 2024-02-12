import Card from './components/card/Card';
import HalfBox from './components/half-box/HalfBox';
import MainContainer from './components/main-container/mainContainer';
import Rating from './components/rating/Rating';
import Title from './components/title/Title';
import Wrapper from './components/wrapper/Wrapper';
import { CARDS_INFO } from './constants/cards';
import { RATINGS } from './constants/ratings';
import { FONTS_STYLES } from './styles/fonts';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	return (
		<>
			<GlobalStyles />

			<Wrapper>
				<MainContainer>
					<HalfBox>
						<Title
							text='10,000+ of our users love our products.'
							$fontWeight={FONTS_STYLES.$bold}
							$fontSize={FONTS_STYLES.$big}
						/>
						<Title
							text='We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.'
							$fontWeight={FONTS_STYLES.$medium}
						/>
					</HalfBox>
					<HalfBox>
						{RATINGS.map(rating => (
							<Rating
								key={rating.id}
								text={rating.text}
								star-icon={rating.img}
								color={rating.color}
								$width='1rem'
							/>
						))}
					</HalfBox>
				</MainContainer>

				<MainContainer>
					{CARDS_INFO.map(card => (
						<Card
							key={card.id}
							avatar={card.avatar}
							name={card.name}
							status={card.status}
							description={card.description}
							color={card.color}
							$width='3rem'
							$secondaryColor={card.$secondaryColor}
						/>
					))}
				</MainContainer>
			</Wrapper>
		</>
	);
};

/*
<div>
	<div>
		<div>

		</div>
		<div>

		</div>
	</div>

	<div>

	</div>

</div>
*/

export default App;
