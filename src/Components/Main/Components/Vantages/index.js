import { Container } from "./styles";
import svg from "./svg.svg"

export const Vantages = () => {
	return(
		<Container>
			<img src={svg}/>
			<div>
				<h2>Vantagens !</h2>
				<p>
					O UI design possui um papel bastante 
					relevante nas estratégias digitais de 
					uma empresa, pois é através dele que 
					diversos itens serão obtidos, pois 
					sua influência sobre ações do 
					cliente é bastante certeira quando 
					feita de modo eficaz.
				</p>
			</div>
		</Container>
	);
}