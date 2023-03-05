import styled, { css } from "styled-components";

export const StyledPortfolio = styled.section`
  display: flex;
  justify-content: center;

  .contactHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;

    .titleContainer {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .titleSpan {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      .titleSecundary {
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
        color: var(--brandColor);
      }

      @media (max-width: 900px) {
        .titleSecundary {
          font-size: 40px;
          line-height: 49px;
        }
        .titleSpan {
          font-size: 12px;
        }
      }

      @media (max-width: 420px) {
        .titleSecundary {
          font-size: 24px;
          line-height: 29px;
        }
        .titleSpan {
          font-size: 10px;
        }
      }
    }

    .buttonContainer {
      margin-bottom: 12px;
      display: flex;
      gap: 1px;
      align-items: center;
      height: fit-content;
    }

    @media (max-width: 900px) {
      gap: 16px;

      .titleContainer {
        width: 100%;
      }

      .buttonContainer {
        width: 100%;
        display: grid;
        grid-template-areas:
          "filter1 filter2"
          "filter3 filter4";

        margin-bottom: 10px;

        .filter1 {
          grid-area: filter1;
        }
        .filter2 {
          grid-area: filter2;
        }
        .filter3 {
          grid-area: filter3;
        }
        .filter4 {
          grid-area: filter4;
        }
      }
    }

    @media (max-width: 720px) {
      flex-direction: column;
    }
  }

  .gridCardsPortfólios {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  img {
    width: 100%;
    max-height: 330px;
    object-fit: cover;
    background-position: center;
    @media (max-width: 600px) {
      height: 280px;
    }
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    .textContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 8px;

      h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: var(--brandColor);
      }

      .portfolioCardDescription {
        height: 32px;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0.15px;
        color: var(--brandColor);
        opacity: 0.7;
      }
    }

    span {
      cursor: pointer;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.2px;
      text-decoration-line: underline;
      text-transform: uppercase;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1223px;
  padding: 65px 10px 0 10px;
  gap: 40px;
`;

interface IStyledButton {
  isDisabled: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.17px;
  background: #08181b;
  padding: 8px 16px;
  color: var(--base1);
  opacity: 1;

  ${(props) =>
    props.isDisabled
      ? css`
          opacity: 0.3;
        `
      : css`
          opacity: 1;
        `}
`;
