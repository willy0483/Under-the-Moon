import { HeaderStyled } from "./Header.Styled";
import { Navbar } from "../Navbar/Navbar";

export const Header = ({ backgcolor }) => {
  return (
    <HeaderStyled backgcolor={backgcolor}>
        <Navbar>
        </Navbar>
    </HeaderStyled>
  );
};