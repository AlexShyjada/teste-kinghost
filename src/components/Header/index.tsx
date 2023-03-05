import { ArrowUpRight, List, X } from "phosphor-react";
import { useState } from "react";
import { useMobile } from "../utils/useMobile";
import {
  StyledButton,
  StyledContainer,
  StyledHeaderDesktop,
  StyledHeaderMobile,
  StyledNav,
  StyledNavMobile,
} from "./styles";

export function Header() {
  const [isHeaderMobileActive, setIsHeaderMobileActive] = useState(false);

  const { width } = useMobile();

  return (
    <>
      {width >= 900 ? (
        <StyledHeaderDesktop id="Header">
          <StyledContainer>
            <img src="/logo-KOG.png" alt="Logo KOG Construtora" />
            <StyledNav>
              <a href="#Inicio">Inicio</a>
              <a href="#Servicos">Áreas de atuação</a>
              <a href="#Portfolio">Portfólio</a>
              <a href="#SobreNos">Sobre nós</a>
              <a href="#Contato">Contato</a>
            </StyledNav>

            <StyledButton>
              <a href="#">
                Área do cliente
                <ArrowUpRight size={16} />
              </a>
            </StyledButton>
          </StyledContainer>
        </StyledHeaderDesktop>
      ) : (
        <>
          <StyledHeaderMobile>
            <StyledContainer>
              <img src="/logo-KOG.png" alt="Logo KOG Construtora" />
              {isHeaderMobileActive ? (
                <button
                  onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}
                >
                  <X size={24} />
                </button>
              ) : (
                <button>
                  <List
                    size={24}
                    onClick={() =>
                      setIsHeaderMobileActive(!isHeaderMobileActive)
                    }
                  />
                </button>
              )}
            </StyledContainer>
          </StyledHeaderMobile>
          <StyledNavMobile isHeaderMobileActive={isHeaderMobileActive}>
            <a
              onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}
              href="#Inicio"
            >
              Inicio
            </a>
            <a
              onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}
              href="#Servicos"
            >
              Áreas de atuação
            </a>
            <a
              onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}
              href="#Portfolio"
            >
              Portfólio
            </a>
            <a
              onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}
              href="#SobreNos"
            >
              Sobre nós
            </a>
            <a
              onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}
              href="#Contato"
            >
              Contato
            </a>
          </StyledNavMobile>
        </>
      )}
    </>
  );
}
