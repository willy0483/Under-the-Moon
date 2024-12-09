import styled from "styled-components";
import { colors } from "../../Styles/styles";

export const FormStyled = styled.section`
  padding: 3rem;
  p {
    color: ${colors.white};
    font-size: 1.5rem;
    font-weight: 500;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 1rem 0 1.5rem 0;
    gap: 1rem;
  }
`;
