import { FooterStyled } from "./Footer.Styled";
import { Form } from "../Form/Form";
import { Contact } from "../Contact/Contact";

export const Footer = () =>{
    return (
        <FooterStyled>
            <Form />
            <Contact/>
        </FooterStyled>
    )
}
