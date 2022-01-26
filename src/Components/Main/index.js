import {Why} from "./Components/Why/"
import {How} from "./Components/How/"
import { Vantages } from "./Components/Vantages/";

import { Container } from "./styles";

export const Main = () => {
  return (
    <Container>
      <Why/>
      <How/>
      <Vantages/>
    </Container>
  );
}
