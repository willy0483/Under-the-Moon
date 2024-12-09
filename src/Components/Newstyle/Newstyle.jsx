import { NewstyleStyled } from "./Newstyle.Styled";

import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { colors } from "../../Styles/styles";

export const Newstyle = () => {
    return (
        <NewstyleStyled>
            <Title size="2rem" color="black"><h2>Under the moon - New style</h2></Title>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus. Sodales neque quisque sodales etiam tortor ut praesent. Id luctus tincidunt aenean molestie pellentesque. Viverra sit aliquam faucibus volutpat lectus sed eu euismod. Suspendisse augue ipsum pellentesque sagittis nunc. Maecenas mattis neque orci bibendum quam faucibus amet platea congue. Amet condimentum faucibus ultrices nunc varius nisl viverra vivamus amet. Habitant dictum fermentum vitae proin ut. Eu faucibus molestie lacus porttitor sed pellentesque turpis in. Aliquam .</p>
            </article>
            <div><Button border="1px solid #262626" color="#262626"  textValue="LÆS MERE"></Button></div>
        </NewstyleStyled>
    )
}