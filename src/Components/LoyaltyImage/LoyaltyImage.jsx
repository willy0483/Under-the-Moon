import { LoyaltyImageStyled } from "./LoyaltyImage.Styled";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";

export const LoyaltyImage = ({ imageUrl, headerText, articleText, buttonText, buttonBorder, buttonColor, buttonbgColor }) => {
    return (
        <LoyaltyImageStyled>
            <img src={imageUrl} alt="Loyalty" />
            <div className="content">
                <Title size="3rem" color="white"><h3>{headerText}</h3></Title>
                <article>
                    <p>{articleText}</p>
                </article>
                <div>
                    <Button 
                        textValue={buttonText} 
                        border={buttonBorder} 
                        color={buttonColor} 
                        backgcolor={buttonbgColor} 
                    />
                </div>
            </div>
        </LoyaltyImageStyled>
    );
};