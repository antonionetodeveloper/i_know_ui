/* From cssbuttons.io */
import styled from "styled-components";

export const Button = (props) =>{
	return(
		<Container onClick={() => window.location.href = "https://antonionetodeveloper.github.io/Portfolio/"}>
			{props.text}
		</Container>
	);
}

const Container = styled.button`
	&{
		background-color: white;
		display: inline-block;
		padding: 1vw 2vw;
		border: 1px solid #5E60CE;
		border-radius: 4px;
		transition: all 0.2s ease-in;
		position: relative;
		overflow: hidden;
		font-size: 19px;
		color: black;
		z-index: 1;

		:before {
			content: "";
			position: absolute;
			left: 50%;
			transform: translateX(-50%) scaleY(1) scaleX(1.25);
			top: 100%;
			width: 140%;
			height: 180%;
			background-color: rgba(0, 0, 0, 0.05);
			border-radius: 50%;
			display: block;
			transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
			z-index: -1;
		}

		:after {
			content: "";
			position: absolute;
			left: 55%;
			transform: translateX(-50%) scaleY(1) scaleX(1.45);
			top: 180%;
			width: 160%;
			height: 190%;
			background-color: #6930C3;
			border-radius: 50%;
			display: block;
			transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
			z-index: -1;
		}

		:hover {
			color: #ffffff;
			border: 1px solid #5E60CE;
			cursor: pointer;

			:before {
				top: -35%;
				background-color: #6930C3;
				transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
			}

			:after {
				top: -45%;
				background-color: #6930C3;
				transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
			}
		}
	}
`;