import { ContactItemStyled } from "./ContactItem.Styled";


export const ContactItem = ({textValue, textValue2}) => {
    return(
        <ContactItemStyled >
            <p>{textValue}</p>
            <p>{textValue2}</p>
        </ContactItemStyled>
    )

}