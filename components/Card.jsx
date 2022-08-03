import react from "react";
import styled from "styled-components";
import logoImg from "../public/assets/DrillBuster_Logo.png";
import Image from "next/image";

const CardImage = styled.div`
  width: 100%;
  margin-bottom: 2.5em;
  border: 5px solid white;

  @media (min-width: 1000px) {
    max-width: 750px;
    margin-bottom: 2em;
    width: 40%;
    height: 100%;
  }
`;

// const CardImage = styled.img`
//   width: 100%;
//   margin-bottom: 2.5em;
//   border: 5px solid white;

//   @media (min-width: 1000px) {
//     max-width: 750px;
//     margin-bottom: 2em;
//     width: 40%;
//     height: 100%;
//   }
// `;

CardImage.defaultProps = {
  src: logoImg,
};

const CardWrapper = styled.div`
  width: 95%;
  margin: 3.5em auto;

  @media (min-width: 1000px) {
    /* margin-bottom: 2em; */
    display: flex;
    justify-content: space-evenly;
    /* margin: 4em auto; */
  }
`;

const CardTitle = styled.h3`
  font-size: 3.5rem;
  text-align: left;
  margin-bottom: 0.5em;

  @media (min-width: 1000px) {
    font-size: 2.5vw;
  }
`;

const CardSummary = styled.p`
  font-size: 2rem;
  line-height: 2em;
  @media (min-width: 1000px) {
    font-size: 1.5vw;
  }
`;

const CardTextContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 40%;
    /* margin: auto 0; */
  }
`;

const Card = ({ title, text, image, isOnLeft, className }) => {
  return (
    <CardWrapper className={`${isOnLeft && className}`}>
      <CardImage>
        <Image src={image} layout="intrinsic" />
      </CardImage>
      <CardTextContainer>
        <CardTitle>{title}</CardTitle>
        <CardSummary>{text}</CardSummary>
      </CardTextContainer>
    </CardWrapper>
  );
};

export default Card;
