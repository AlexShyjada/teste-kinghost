import { portifolioMockedContent } from "./portifolioMockedContent";
import { Container, StyledButton, StyledPortfolio } from "./styles";
import { useState } from "react";
import { PortfolioCard } from "./portfolioCard";

export function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("allMockedContent");
  const [filteredPortfolio, setFilteredPortfolio] = useState(
    portifolioMockedContent
  );

  function filterArray(filter: string) {
    setSelectedFilter(filter);
    filter !== "allMockedContent"
      ? setFilteredPortfolio(
          portifolioMockedContent.filter(
            (portfolioItem) => portfolioItem.projectType === filter
          )
        )
      : setFilteredPortfolio(portifolioMockedContent);
  }

  return (
    <StyledPortfolio id="Portfolio">
      <Container>
        <header className="contactHeader">
          <div className="titleContainer">
            <span className="titleSpan">
              Conheça alguns dos nossos projetos
            </span>
            <h2 className="titleSecundary">Nosso Portifólio</h2>
          </div>
          <div className="buttonContainer">
            <StyledButton
              isDisabled={selectedFilter === "allMockedContent" ? false : true}
              onClick={() => filterArray("allMockedContent")}
              className="filter1"
            >
              Todos os projetos
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "residencial" ? false : true}
              onClick={() => filterArray("residencial")}
              className="filter2"
            >
              Residencial
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "saude" ? false : true}
              onClick={() => filterArray("saude")}
              className="filter3"
            >
              Saúde
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "comercial" ? false : true}
              onClick={() => filterArray("comercial")}
              className="filter4"
            >
              Comercial
            </StyledButton>
          </div>
        </header>

        

        <div className="gridCardsPortfólios">
          {filteredPortfolio.map((card) => (
            <PortfolioCard
              title={card.title}
              key={card.id}
              description={card.description}
              imgList={card.imgList}
            />
          ))}
        </div>
      </Container>
    </StyledPortfolio>
  );
}
