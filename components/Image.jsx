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
  margin: 1em 1em;
  background-size: cover;
  text-align: center;
`;

const ImageCardText = styled.div`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 3rem;
`;

const ImageCardIcon = styled.img`
  width: 10%;
`;

ImageCard.defaultProps = {
  src: logoImg,
};

const ImageSection = ({ imageUrl, text, icon, isLocked }) => {
  return (
    <div>
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
    </div>
  );
};

export default ImageSection;
