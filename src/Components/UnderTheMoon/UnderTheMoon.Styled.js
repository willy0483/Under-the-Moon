import styled from "styled-components";
import { mixins } from "../../Styles/styles";

export const UnderTheMoonStyled = styled.section`
  position: relative;
  height: calc(100vh - 3rem);
  font-family: "Gilda Display", serif;

  h1 {
    font-weight: 400;
  }

  img {
    ${mixins.imageCover}
  }
  div {
    position: absolute;
    bottom: 0;
    article {
      padding: 2rem 0 4rem 0;
      background-color: #00000080;

      header {
        margin: 3rem 0;
      }
      p {
        color: white;
        width: 600px;
        margin: 0 auto;
      }
    }
  }
`;
