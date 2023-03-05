import styled from "styled-components";

interface IStyledHeroProps {
  image: string;
}

export const StyledHero = styled.section<IStyledHeroProps>`
  width: 100vw;
  max-height: 650px;
  height: 650px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 61.3%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.3s;

  @media (max-width: 1400px) {
    height: 550px;
    max-height: 550px;
  }

  @media (max-width: 500px) {
    height: 450px;
  }
`;

interface IStyledButtonProps {
  isButtonActive: boolean;
}

export const StyledButton = styled.div<IStyledButtonProps> `
  padding: 4px;
  border-radius: 4px;
  background: ${(props) => props.isButtonActive ? "var(--brandColor)" : "var(--base3)"};
  border: solid 2px ${(props) => props.isButtonActive ? "var(--brandColor)" : "var(--border)"};
  cursor: ${(props) => props.isButtonActive ? "pointer" : "not-allowed"};
  color: ${(props) => props.isButtonActive ? "var(--base1)" : "rgba(27, 27, 27, 0.5)"};
`

export const StyledImageIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 10px auto;
  gap: 8px;
  transition: 0.3s;

`;
interface IStyledIndicatorProps {
  isIndicatorActive: boolean;
}

export const Indicator = styled.span<IStyledIndicatorProps>`
  height: 12px;
  width: ${(props) => (props.isIndicatorActive ? "40px" : "12px")};
  border-radius: 999px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isIndicatorActive ? "var(--brandColor)" : "#9E9E9E"};
`;

export const Container = styled.a`
  width: 100%;
  max-width: 1223px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--base1);
  cursor: pointer;

  h2 {
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.25px;
  }

  span {
    transition: 0.3s;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
  }
`;
