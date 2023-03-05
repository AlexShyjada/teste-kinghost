import styled from "styled-components";

export const StyledProduct = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 720px) {
    padding: 24px 10px;
  }
  `;

export const Container = styled.div`
  padding: 65px 10px 0 10px;
  width: 100%;
  max-width: 1223px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 940px) {
    gap: 24px;
  }
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div.titleContent {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    h2 {
      font-weight: 700;
      font-size: 48px;
      line-height: 59px;
    }
  }

  button {
    margin-bottom: 12px;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 32px;
    color: var(--base1);
    background: var(--brandColor);

    &:hover {
      background: "$brandColorHover";
    }
  }

  @media (max-width: 900px) {
    button {
      display: none;
      width: 0;
      height: 0;
    }
    div.titleContent {
      gap: 8px;
      h2{
        font-size: 40px;
        line-height: 49px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 420px) {
    div.titleContent {
      gap: 4px;
      h2{
        font-size: 24px;
        line-height: 29px;
      }
      span {
        font-size: 10px;
      }
    }
  }
`;

export const StyledServicesContainer = styled.div`
  display: grid;
  gap: 16px;

  .card1 {
    grid-area: card1;
    min-width: 100%;
    width: 100%;
  }
  .card2 {
    grid-area: card2;
    min-width: 100%;
  }
  .card3 {
    grid-area: card3;
    min-width: 100%;
    width: 100%;
  }
  grid-template-areas: "card1 card2 card3";

  @media (max-width: 1085px) {
    grid-template-areas:
      "card1 card2"
      "card3 card3";
  }

  @media (max-width: 720px) {
    gap: 8px;
    grid-template-areas:
      "card1"
      "card2"
      "card3";
  }
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
  background: var(--base3);

  img {
    width: fit-content;
    height: 80px;
  }

  h3.productTitle {
    font-weight: 700;
    font-size: 28px;
    line-height: 41px;
    letter-spacing: 0.25px;
  }

  span.productDescription {
    height: 100px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.15px;
  }
  @media (max-width: 940px) {
    gap: 8px;
    padding: 16px;

    img {
      height: 42px;
      width: 32px;
    }

    h3.productTitle {
      font-size: 20px;
      line-height: 24px;
    }

    span.productDescription {
      height: fit-content;
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media (max-width: 420px) {
    gap: 4px;
  }
`;
