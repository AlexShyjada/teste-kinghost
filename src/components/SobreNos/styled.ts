import styled from "styled-components";

export const StyledSobreNos = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    padding: 65px 10px;
    display: flex;
    gap: 40px;
    max-width: 1224px;
    width: 100%;

    @media (max-width: 1200px) {
      flex-direction: row-reverse;
    }
    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }

    .textContainer {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .mainContent {
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media (max-width: 400px) {
          gap: 16px;
        }

        .titleContainer {
          display: flex;
          flex-direction: column;
          gap: 8px;

          h2.secundaryTitle {
            font-weight: 700;
            font-size: 48px;
            line-height: 59px;
            color: var(--brandColor);
          }

          span.subtitle {
            font-weight: 500;
            font-size: 16px;
            line-height: 32px;
            letter-spacing: 2.2px;
            text-transform: uppercase;
          }
          @media (max-width: 1200px) {
            gap: 0;
            h2.secundaryTitle {
              font-size: 40px;
            }
            span.subtitle {
              font-size: 14px;
            }
          }

          @media (max-width: 500px) {
            h2.secundaryTitle {
              font-size: 24px;
              line-height: 29px;
            }
            span.subtitle {
              font-size: 12px;
              line-height: 16px;
            }
          }
        }

        .paragrathContainer {
          display: flex;
          flex-direction: column;
          gap: 32px;

          p.paragrath {
            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0.2px;
          }

          @media (max-width: 1200px) {
            gap: 20;
            p.paragrath {
              font-size: 14px;
              line-height: 24px;
            }
          }
        }

        .buttonContainer {
          display: flex;
          gap: 16px;
        }
      }

      .buttonContainer {
        display: flex;
        gap: 16px;

        button {
          .linkedin,
          .instagram {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
            text-decoration: none;
            font-weight: 500;
            gap: 8px;
            border: solid 1px var(--brandColor);
            transition: 0.3s;
          }
          .instagram {
            color: var(--brandColor);

            &:hover {
              color: var(--base1);
              background: var(--brandColorDark);
            }
          }
          .linkedin {
            color: var(--base1);
            background-color: var(--brandColor);

            &:hover {
              background: var(--brandColorDark);
            }
          }
        }
      }
    }

    @media (max-width: 1223px) {
    }
  }
`;

export const Image = styled.img`
  position: relative;
  min-width: 594px;
  max-width: 594px;
  height: 443px;
  object-fit: cover;

  @media (max-width: 1200px) {
    min-width: 440px;
    max-width: 440px;
    height: 290px;
  }

  @media (max-width: 980px) {
    min-width: 350px;
    max-width: 300px;
    height: 400px;
  }

  @media (max-width: 800px) {
    width: 100%;
    min-width: 100%;
    max-height: 400px;
    min-height: 400px;
    object-position: top;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: 100%;
    max-height: 350px;
    min-height: 350px;
  }

  @media (max-width: 500px) {
    width: 100%;
    min-width: 100%;
    max-height: 250px;
    min-height: 250px;
    img {
      object-position: top;
    }
  }
`;
