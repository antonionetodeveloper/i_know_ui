import { Container } from "./styles";

import why from "./svg.svg"

export const Why = () => {
  return (
    <Container>
			<img src={why} />
			<div className="text">
				<h2>Porque UI ?</h2>
				<p>
				Funciona como uma ponte que incentiva 
				uma pessoa a realizar uma ação (clicar 
				em um botão ou mudar de site, por 
				exemplo). ... Por isso, o UI 
				é uma área de inteligência do design 
				que se volta a facilitar a vida do usuário.
				</p>
			</div>
    </Container>
  );
}
