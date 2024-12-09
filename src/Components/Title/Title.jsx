import { TitleStyled } from "./Title.Styled";

export const Title = ({children, size,color, center , position}) => {
    return (
        <TitleStyled size={size} color={color} center={center}>
            {children}
        </TitleStyled>
    )
}