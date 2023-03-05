import styled, { css } from "styled-components";

export const StyledModal = styled.section`
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99999;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);

  .container {
    display: flex;
    overflow: scroll;
    flex-direction: column;
    max-width: 1230px;
    padding: 32px 106px;
    background: var(--base1);
    height: 100%;
    gap: 40px;

    .closeModal {
      width: fit-content;
      display: flex;
      align-items: center;
      font-weight: 500;
      gap: 8px;

      &:hover {
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -5px;
          background: var(--brandColor);
        }
      }
    }

    .mainContent {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .header {
        display: flex;
        flex-direction: column;
        gap: 16px;

        h2.secundaryTitle {
          font-weight: 700;
          font-size: 48px;
          line-height: 59px;
        }

        p.description {
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.15px;
        }
      }

      .imageContainer {
        display: flex;
        flex-direction: column;
        gap: 24px;
        .mainFigure {
          position: relative;
          height: 563px;
          width: 100%;

          img {
            object-fit: cover;
          }
        }

        .gridImages {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(5, 184px);
        }
      }
    }
  }
`;

interface IStyledModal {
  isImageActive: boolean;
}

export const StyledImageItem = styled.a<IStyledModal>`
  position: relative;
  width: 100%;
  height: 100px;
  border: solid 2px var(--border);

  ${(props) =>
    props.isImageActive
      ? css`
          border: solid 2px var(--brandColor);
        `
      : ""}

  img {
    object-fit: cover;
  }
`;
