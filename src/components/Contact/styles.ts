import styled from "styled-components";

export const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  
  .container {
    padding: 65px 10px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .contactHeader {
      display: flex;
      justify-content: space-between;
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
      }
      .buttonContainer {
        display: flex;
        gap: 24px;
        align-items: center;
      }
    }

    .gridCards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;

      .card.whatsApp,
      .card.instagram {
        display: none;
        opacity: 0;
        width: 0;
        height: 0;
      }

      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 24px 16px;
        gap: 24px;
        border: solid 1px var(--border);

        .cardTextContainer {
          display: flex;
          flex-direction: column;
          gap: 6px;

          .tertiaryText {
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: var(--brandColor);
          }
          .contactDescription {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: var(--brandColor);
          }
        }
      }
    }
  }

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 16px;
    .container {
      gap: 24px;
      .contactHeader {
        .buttonContainer {
          display: none;
        }
      }

      .gridCards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (max-width: 660px) {
    gap: 16px;
    .container {
      .contactHeader {
      }
      .gridCards {
        grid-template-columns: 1fr;
        gap: 12px;

        .card.whatsApp,
        .card.instagram {
          opacity: 1;
          width: 100%;
          height: fit-content;
          display: flex;
        }

        .card {
          gap: 8px;
          padding: 16px;
          svg {
            height: 20px;
            width: 20px;
          }
          .cardTextContainer {
            gap: 4px;
            .tertiaryText {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 420px) {
    padding: 24px 10px;
    .container {
      .contactHeader {
        .titleContainer {
          h2.titleSecundary {
            font-size: 28px;
            line-height: 34px;
          }
          span.titleSpan {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const StyledInstagram = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 24px;
  color: var(--brandColor);
  border: 1px solid var(--brandColor);
`;
export const StyledWhatsapp = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 24px;
  color: var(--base1);
  background: var(--brandColor);
  border: 1px solid var(--brandColor);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1223px;
`;
