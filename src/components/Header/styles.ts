import styled, { css } from "styled-components";

export const StyledHeaderDesktop = styled.header`
  display: flex;
  justify-content: center;
  background: var(--base1);
  height: 60px;

  z-index: 999;
  position: fixed;
  inset: 0 0 auto 0;
`;

export const StyledContainer = styled.div`
  width: 1224px;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;

  a {
    font-size: 15px;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    position: relative;
    color: var(--brandColor);
    opacity: 0.85;
    transition: 0.2s;

    &::after {
      position: absolute;
      content: "";
      background-color: var(--brandColor);
      height: 2px;
      width: 0;
      inset: auto 0 0 0;
      transition: 0.2s;
    }

    &:hover {
      opacity: 1;
      &::after {
        width: 100%;
      }
    }
  }
`;

export const StyledButton = styled.button`
  a {
    padding: 0 12px;
    font-size: 14px;
    height: 32px;
    color: var(--brandColor);
    display: flex;
    align-items: center;
    gap: 4px;
    border: solid 1px var(--brandColor);
    transition: 0.3s;

    &:hover {
      color: var(--base1);
      background: var(--brandColor);
    }
  }
`;

// Header Mobile
export const StyledHeaderMobile = styled.header`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    position: fixed;
    z-index: 9999;
    inset: 0 0 auto 0;
    height: 50px;
    background: var(--base1);
  }
`;

interface iStyledNavMobileProps {
  isHeaderMobileActive: boolean;
}

export const StyledNavMobile = styled.nav<iStyledNavMobileProps>`
  display: none;
  height: calc(100vh - 50px);
  inset: 50px 0 auto 0;
  width: 100vw;
  position: fixed;
  z-index: 999;

  background: var(--base2);
  flex-direction: column;
  align-items: center;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) =>
    props.isHeaderMobileActive
      ? css`
          transform: translateY(0px);
        `
      : css`
          transform: translateY(-100%);
        `}

  @media (max-width: 900px) {
    display: flex;
    a {
      width: 100%;
      font-weight: 500;
      padding: 24px 10px;
      border-bottom: solid 1px var(--border);
      transition: 0.2s;

      &:hover {
        color: var(--base1);
        background-color: var(--brandColor);
      }
    }
  }
`;
