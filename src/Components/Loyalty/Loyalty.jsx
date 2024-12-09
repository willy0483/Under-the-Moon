import { LoyaltyStyled } from "./Loyalty.Styled";

import { LoyaltyImage } from "../LoyaltyImage/LoyaltyImage";
import { Container } from "../Container/Container";

import imgOne from "../../Assets/imgOne.jpg"
import imgTwo from "../../Assets/imgTwo.jpg"


export const Loyalty = () => {
    return (
        <LoyaltyStyled>
            <Container>
        <LoyaltyImage 
            imageUrl={imgOne}
            headerText="One 2 One" 
            articleText="Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque." 
            buttonText="BOOK TID" 
            buttonBorder="2px solid #fff" 
            buttonColor="white" 
            buttonbgColor="#262626" 
        />
        </Container>
        <Container>
            <LoyaltyImage 
            imageUrl={imgTwo} 
            headerText="Loyalty Free" 
            articleText="Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque." 
            buttonText="LÆS MERE" 
            buttonBorder="2px solid #fff" 
            buttonColor="white" 
            buttonbgColor="#262626" 
        />
        </Container>

        </LoyaltyStyled>
    )
}