import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) =>
    props.backgcolor ? props.backgcolor : "transparent"};
`;
