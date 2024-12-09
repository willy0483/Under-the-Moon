import styled from "styled-components";

import { colors } from "../../Styles/styles";

export const TitleStyled = styled.header`
  font-size: ${(props) => (props.size ? props.size : "2rem")};
  color: ${(props) => (props.color ? props.color : colors.black)};
  text-align: ${(props) => (props.center ? "center" : "start")};
`;
