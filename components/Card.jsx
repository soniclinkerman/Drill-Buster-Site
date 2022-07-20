import react from "react";
import styled from "styled-components";
import logoImg from "../public/assets/DrillBuster_Logo.png";
const CardImage = styled.img`
  width: 100%;
  margin-bottom: 2.5em;
`;

CardImage.defaultProps = {
  src: logoImg,
};

const CardWrapper = styled.div`
  width: 95%;
  margin: 3.5em auto;
`;

const CardTitle = styled.h3`
  font-size: 3.5rem;
  text-align: left;
  margin-bottom: 0.5em;
`;

const CardSummary = styled.p`
  font-size: 2rem;
  line-height: 2em;
`;

const Card = ({ title, text, image }) => {
  return (
    <CardWrapper>
      <CardImage src={image}></CardImage>
      <CardTitle>{title}</CardTitle>
      <CardSummary>{text}</CardSummary>
    </CardWrapper>
  );
};

export default Card;
