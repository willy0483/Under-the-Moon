import styled from "styled-components";

import { mixins } from "../../Styles/styles";

export const NavbarItemStyled = styled.li`
  a {
    color: ${(props) => props.color};
    ${mixins.resetLink}
    padding: 0.5rem;
  }
`;
