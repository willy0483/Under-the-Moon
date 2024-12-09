import { NavbarItemStyled } from "./NavbarItem.Styled";

export const NavbarItem = ({textValue, color,}) =>{
    return (
        <NavbarItemStyled>
            <a href="#" style={color={color}}>{textValue}</a>
        </NavbarItemStyled>
    )
}