import { CardStyled, CardImage, CardImageWrapper } from "./styled/CardStyled";

const Card = ({ src, desc }) => {
  return (
    <CardStyled>
      <CardImageWrapper>
        <CardImage alt="cardImage" src={src} />
      </CardImageWrapper>
      <div>{desc}</div>
    </CardStyled>
  );
};
export default Card;
