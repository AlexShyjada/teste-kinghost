import { ModalPortfolio } from "../Modal";
import { useState } from "react";
import {Card} from './styles'

interface IPortfolioCard {
  title: string;
  description: string;
  imgList: {
    id: 1;
    alt: string;
    url: string;
  }[];
}

export function PortfolioCard(props: IPortfolioCard) {
  const [isModalActive, setIsModalActive] = useState(false);

  const { title, description, imgList } = props;

  return (
    <Card>
      {isModalActive ? (
        <ModalPortfolio
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          description={description}
          title={title}
          imgList={imgList}
        />
      ) : (
        ""
      )}
      <img alt={title} src={imgList[0].url} />

      <div className="contentContainer">
        <div className="textContainer">
          <h3> {title} </h3>
          <p className="portfolioCardDescription">{description}</p>
        </div>
        <span onClick={() => setIsModalActive(!isModalActive)}>Saiba mais</span>
      </div>
    </Card>
  );
}
