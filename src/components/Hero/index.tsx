import { CaretLeft, CaretRight } from "phosphor-react";
import { useState, useEffect } from "react";
import { ModalPortfolio } from "../Modal";
import { portifolioMockedContent } from "../Portfolio/portifolioMockedContent";
import {
  Container,
  Indicator,
  StyledButton,
  StyledHero,
  StyledImageIndicator,
} from "./styles";

interface BannerContent {
  id: number;
  positionOnMockedContent: number;
  title: string;
  description: string;
  img: {
    alt: string;
    url: string;
  };
}

const bannerContents: BannerContent[] = [
  {
    id: 0,
    positionOnMockedContent: 0,
    title: "Palazzo Anacapri",
    description: "Projeto: FRS Arquitetura",
    img: {
      alt: "Foto",
      url: "/portfolio/palazzo-anacapri/post1.jpg",
    },
  },
  {
    id: 1,
    positionOnMockedContent: 1,
    title: "Forest Residence",
    description: "Projeto: Daniela Lopes",
    img: {
      alt: "Foto",
      url: "/portfolio/forest-residence/post1.jpg",
    },
  },
  {
    id: 2,
    positionOnMockedContent: 2,
    title: "Mansão José Martins Catharino",
    description: "Projeto: Nathália Velame",
    img: {
      alt: "Foto",
      url: "/portfolio/mansao-jose-martins-catharino/post2.jpg",
    },
  },
];

const BANNER_ROTATION_INTERVAL_MS = 5000;

export function Hero() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalContentSelected, setModalContentSelected] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((currentIndex: number) =>
        currentIndex === bannerContents.length - 1 ? 0 : currentIndex + 1
      );
    }, BANNER_ROTATION_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  function handleBackPage() {
    const FIRST_BANNER_INDEX = 0;
    if (currentBannerIndex === FIRST_BANNER_INDEX) {
      return;
    }
    setCurrentBannerIndex(currentBannerIndex - 1);
  }

  function handleNextPage() {
    const LAST_BANNER_INDEX = bannerContents.length - 1;
    if (currentBannerIndex === LAST_BANNER_INDEX) {
      return;
    }
    setCurrentBannerIndex(currentBannerIndex + 1);
  }

  function handleModalOpen() {
    setModalContentSelected(
      bannerContents[currentBannerIndex].positionOnMockedContent
    );
    setIsModalActive(true);
  }

  const { title, description, img } = bannerContents[currentBannerIndex];

  return (
    <>
      {isModalActive && (
        <ModalPortfolio
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          title={portifolioMockedContent[modalContentSelected].title}
          description={
            portifolioMockedContent[modalContentSelected].description
          }
          imgList={portifolioMockedContent[modalContentSelected].imgList}
        />
      )}
      <StyledHero id="Inicio" image={img.url}>
        <Container onClick={() => handleModalOpen()}>
          <h2>{title}</h2>
          <span>{description}</span>
        </Container>
      </StyledHero>
      <StyledImageIndicator className="imageIndicatorContainer">
        <StyledButton
          isButtonActive={currentBannerIndex !== 0}
          onClick={() => handleBackPage()}
        >
          <CaretLeft size={16} />
        </StyledButton>
        {bannerContents.map((item) => {
          return (
            <Indicator
              key={item.id}
              className="indicator"
              onClick={() => setCurrentBannerIndex(item.id)}
              isIndicatorActive={item.id === currentBannerIndex}
            />
          );
        })}
        <StyledButton
          isButtonActive={
            bannerContents.length - 1 != currentBannerIndex ? true : false
          }
          onClick={() => handleNextPage()}
        >
          <CaretRight size={16} />
        </StyledButton>
      </StyledImageIndicator>
    </>
  );
}
