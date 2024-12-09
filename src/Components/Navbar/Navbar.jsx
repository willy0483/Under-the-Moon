import { NavbarStyled } from "./Navbar.Styled";
import { NavbarItem } from "../NavbarItem/NavbarItem";


export const Navbar = () =>{
    return (
        <NavbarStyled>
            <ul>
                <NavbarItem textValue={"HJEM"} color={"white"}/>
                <NavbarItem textValue={"KONCEPTER"} color={"white"}/>
                <NavbarItem textValue={"UTM LOYALTY"} color={"white"}/>
                <NavbarItem textValue={"OM"} color={"white"}/>
                <NavbarItem textValue={"KONTAKT"} color={"white"}/>
            </ul>
        </NavbarStyled>
    )
}