import { Container, StyledFooter } from './styles'

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        © Copyright 2022 - KOG Construtora.
        <a href="#Inicio">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" fill="#08181B"/>
          <path d="M18 23.5V12.5" stroke="#FBFBFB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 17L18 12.5L22.5 17" stroke="#FBFBFB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="0.5" y="0.5" width="35" height="35" stroke="#ECECEC" strokeOpacity="0.1"/>
          </svg>
        </a>
      </Container>
      
    </StyledFooter>
  )
}
