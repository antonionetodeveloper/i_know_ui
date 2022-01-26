import styled from "styled-components";
import wave from "./SVGS/wave.svg"

export const Container = styled.header`
	&{
		background-image: url(${wave});
		background-size: 100vw;
		background-repeat: no-repeat;
		background-position: center;
		height: 20vw;

		div{
			display: flex;
			align-items: center;
			justify-content: space-between;
		
			h1{
				color: white;
				margin-left: 2vw;
				font-size: 3vw;
			}

			button{
				margin-right: 2vw;
			}
		}
	}

`;