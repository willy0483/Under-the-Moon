import { ContainerStyled } from "./Container.Styled"

export const Container = ({children , width, backgcolor}) =>{
    return (
        <ContainerStyled width={width} backgcolor={backgcolor}>
            {children}
        </ContainerStyled>
    )
}