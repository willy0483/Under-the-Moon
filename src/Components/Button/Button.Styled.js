import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) =>
    props.backgcolor ? props.backgcolor : "transparent"};
  border: ${(props) => (props.border ? props.border : "none")};

  padding: 0.5rem 1rem;
  font-family: "Gilda Display", serif;
  &:hover {
    cursor: pointer;
  }
`;
