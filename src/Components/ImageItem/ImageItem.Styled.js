import styled from "styled-components";
import { mixins } from "../../Styles/styles";

export const ImageItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  div {
    height: 400px;
    img {
      ${mixins.imageCover}
    }
  }
`;
