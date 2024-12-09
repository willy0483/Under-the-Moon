import { UnderTheMoonStyled } from "./UnderTheMoon.Styled";
import blonde from "../../../src/Assets/blonde.jpg";
import { Title } from "../Title/Title";

import { Container } from "../Container/Container";

export const UnderTheMoon = () => {
    return (
        <UnderTheMoonStyled>
            <img src={blonde} alt="blonde" />
            <Container>
            <Title size="6rem" color="white" center="center"><h1>Under The Moon</h1></Title>
            <article>
                <Title size={"2rem"} color="white" center="center"><h3>HAIRSTYLIST OG FRISØR</h3></Title>
                <p>Lorem ipsum dolor sit amet consectetur. Laoreet in vestibulum id in. At aliquam sed nibh elementum. Gravida et tellus quam nibh diam blandit a odio semper. Eu congue eget dolor commodo pellentesque et ac orci. Accumsan rhoncus sed fermentum malesuada. Eu risus integer consequat egestas diam suspendisse consequat mattis.</p>
            </article>
            </Container>
        </UnderTheMoonStyled>
    );
};