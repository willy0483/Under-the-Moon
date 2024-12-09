import styled from "styled-components";
import { mixins } from "../../Styles/styles";

export const LoyaltyImageStyled = styled.div`
  font-family: "Gilda Display", serif;

  position: relative;
  width: 100%;
  height: 400px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  img {
    ${mixins.imageCover}
  }

  div:nth-child(2) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #00000080;
    color: white;
    text-align: center;
    header {
      h3 {
        font-weight: 200;
      }
    }
    button {
      margin-top: 1.5rem;
    }
  }
`;
