import svg from "./svg.svg"
import { Container } from "./styles";

export const How = () => {
	return(
		<Container>
			<div>
				<h2>Como usar ?</h2>
				<p>
					Se você deseja atuar como UI Designer, você precisa começar estudando.<br/>
					Você deve estudar sobre algumas matérias essenciais, como por ex:
				</p>
				<ul>
					<li>User experiencie</li>
					<li>Interação humano-computador (IHC)</li>
					<li>Usabilidade</li>
					<li>Componentes e elementos do UI Design</li>
					<li>Arquitetura da informação</li>
					<li>Estilos de UI Design;</li>
					<li>Entre outros...</li>
				</ul>
			</div>
			<img src={svg}/>
		</Container>
	);
}