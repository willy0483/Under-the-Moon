import { ContactListStyled } from "./ContactList.Styled";


export const ContactList = ({children, flex ,textValue}) => {
    return (
        <ContactListStyled>
            <h3>{textValue}</h3>
            <section style={{ display: flex }}>
            {children}  
            </section>
            </ContactListStyled>
    );
}