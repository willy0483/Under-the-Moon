import { FormStyled } from "./Form.Styled";

import { Button } from "../Button/Button";


export const Form = () => {
    return(
        <FormStyled>
            <p>SUBSCRIBE TO NEWSLETTER</p>
            <div>
                <input placeholder="Full name"/>
                <input placeholder="Email"/>
            </div>
            <Button backgcolor="#1F1F1F" color="white" border="2px solid white" textValue="SIGN UP"></Button>
        </FormStyled>
    )
}