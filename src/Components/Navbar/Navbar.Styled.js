import styled from "styled-components";

import { mixins } from "../../Styles/styles";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: end;
  ul {
    ${mixins.resetList}
    display: flex;
  }
`;
