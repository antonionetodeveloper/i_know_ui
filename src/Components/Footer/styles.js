import styled from "styled-components";
import wave from "./wave.svg"

export const Container = styled.footer`
	&{
		background-image: url(${wave});
		background-size: 100vw;
		background-repeat: no-repeat;
		background-position: center;
		height: 12vw;

		a{
			display: flex;
			justify-content: flex-end;
			margin-right: 2vw;
			color: #5E60CE;
		}
	}
`;