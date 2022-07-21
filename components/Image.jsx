import react from "react";
import styled from "styled-components";

import logoImg from "../public/assets/AdventureKitty_Logo.png";

const UNLCOKED_COLOR = 0.7;
const LOCKED_COLOR = 1;

const ImageCard = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, ${(props) => props.gradientAmount}),
      rgba(0, 0, 0, ${(props) => props.gradientAmount})
    ),
    url(${(props) => props.img});
  border: 2px solid white;
  border-radius: 0.5em;
  padding: 4em;
  margin: 2em 0;
  background-size: cover;
  text-align: center;
  @media (min-width: 1000px) {
    height: 500px;
    margin: 2em;
    width: 300px;
    display: flex;
    align-items: center;
  }
`;

const ImageCardText = styled.div`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2.5rem;
  margin: auto;
`;

const ImageCardIcon = styled.img`
  width: 10%;
  @media (min-width: 1000px) {
    width: 50%;
    margin: auto;
  }
`;

ImageCard.defaultProps = {
  src: logoImg,
};

const ImageSection = ({ imageUrl, text, icon, isLocked }) => {
  return (
    <ImageCard
      img={`${imageUrl}`}
      gradientAmount={isLocked ? LOCKED_COLOR : UNLCOKED_COLOR}
    >
      {isLocked ? (
        <ImageCardIcon src={icon} />
      ) : (
        <ImageCardText>{text} </ImageCardText>
      )}
    </ImageCard>
  );
};

export default ImageSection;
