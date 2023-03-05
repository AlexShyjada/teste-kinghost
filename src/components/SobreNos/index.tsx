import { InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Image, StyledSobreNos } from "./styled";

export function SobreNos() {
  return (
    <StyledSobreNos id="SobreNos">
      <div className="container">
        <div className="textContainer">
          <article className="mainContent">
            <header className="titleContainer">
              <span className="subtitle">Sobre nós</span>
              <h2 className="secundaryTitle">Um pouco sobre a KOG</h2>
            </header>

            <div className="paragrathContainer">
              <p className="paragrath">
                A KOG Construtora é especialista em obras de alto padrão,
                atendendo a empresas e profissionais de sucesso, que buscam
                atendimento personalizado em cada etapa de seu projeto.
              </p>
              <p className="paragrath">
                Para proporcionar uma experiência de obra exclusiva ao cliente,
                e garantir o prazo, custo e qualidade, contamos com uma equipe
                qualificada e utilizamos ferramentas modernas de gestão de obra,
                de forma a tornar seu projeto realidade.
              </p>
            </div>
          </article>

          <div className="buttonContainer">
            <button>
              <a
                href="https://www.linkedin.com/company/kog-construtora/"
                target="_blank"
                className="linkedin"
                rel="noreferrer"
              >
                Linkedin <LinkedinLogo size={20} />
              </a>
            </button>
            <button>
              <a
                href="https://www.instagram.com/kogconstrutora/"
                target="_blank"
                rel="noreferrer"
                className="instagram"
              >
                Instagram <InstagramLogo size={20} />
              </a>
            </button>
          </div>
        </div>
        <Image
          src="/imgSobreNos.png"
          alt="Imagem descritiva Sobre a empresa"
        />
      </div>
    </StyledSobreNos>
  );
}
