import { ButtonStyled } from "./Button.Styled";

export const Button = ({ textValue, color, backgcolor , border }) => {
    return (
        <ButtonStyled color={color} backgcolor={backgcolor} border={border}>
            {textValue}
        </ButtonStyled>
    )
}