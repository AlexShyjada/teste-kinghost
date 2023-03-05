import {
  Clock,
  EnvelopeSimple,
  InstagramLogo,
  MapPinLine,
  WhatsappLogo,
} from "phosphor-react";
import {
  Container,
  StyledContact,
  StyledInstagram,
  StyledWhatsapp,
} from "./styles";

export function Contact() {
  return (
    <StyledContact id="Contato">
      <Container className="container">
        <header className="contactHeader">
          <div className="titleContainer">
            <span className="titleSpan">Fale conosco</span>
            <h2 className="titleSecundary">Entre em contato</h2>
          </div>
          <div className="buttonContainer">
            <StyledInstagram>
              Instagram <InstagramLogo size={16} />
            </StyledInstagram>
            <StyledWhatsapp>
              Whatsapp <WhatsappLogo size={16} />
            </StyledWhatsapp>
          </div>
        </header>

        <div className="gridCards">
          <div className="card whatsApp">
            <WhatsappLogo size={32} />
            <div className="cardTextContainer">
              <h3 className="tertiaryText">WhastsApp</h3>
              <span className="contactDescription">(071) 91234-1234</span>
            </div>
          </div>
          <div className="card instagram">
          <InstagramLogo size={32} />
            <div className="cardTextContainer">
              <h3 className="tertiaryText">Instagram</h3>
              <span className="contactDescription">
                @kogconstrutora
              </span>
            </div>
          </div>
          <div className="card">
            <EnvelopeSimple size={32} />
            <div className="cardTextContainer">
              <h3 className="tertiaryText">E-mail</h3>
              <span className="contactDescription">
                contato@kogconstrutora.com.br
              </span>
            </div>
          </div>
          <div className="card">
            <Clock size={32} />
            <div className="cardTextContainer">
              <h3 className="tertiaryText">Funcionamento</h3>
              <span className="contactDescription">
                Seg a Sex das 08h às 18h
              </span>
            </div>
          </div>
          <div className="card">
            <MapPinLine size={32} />
            <div className="cardTextContainer">
              <h3 className="tertiaryText">Localização</h3>
              <span className="contactDescription">
                Alameda das Algarobas, 930, Caminho das Árvores, Salvador
              </span>
            </div>
          </div>
        </div>
      </Container>
    </StyledContact>
  );
}
