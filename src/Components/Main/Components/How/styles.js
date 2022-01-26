import styled from "styled-components";

export const Container = styled.section`
	&{
		display: flex;
		justify-content: center;
		gap: 10vw;
		align-items: center;
		
		img{
			width: 30%;
		}

		div{
			text-align: center;

			h2{
				font-size: 3vw;
				margin: 0;
			}
			p{
				text-align: justify;
				width: 40vw;
				margin: 0;
			}

			ul{
				li{
					text-align: initial;
				}
			}
		}
	}
`;