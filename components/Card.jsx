import react from "react";
// import { HeaderLogo, HeaderVideo } from "../components.styled/Header.styled";
import styled from "styled-components";
import logoImg from "../public/assets/DrillBuster_Logo.png";

// const CardImage = styled.img`
//   max-width: 500px;
//   width: 90%;
//   margin: 1em auto;
// `;

// CardImage.defaultProps = {
//   src: logoImg,
// };

// const CardWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
// `;

// const CardTitle = styled.h3`
//   font-size: 3rem;
//   text-align: center;
// `;

// const CardSummary = styled.p`
//   font-size: 2rem;
//   text-align: left;
// `;
const CardImage = styled.img`
  max-width: 500px;
  width: 90%;
  margin: 1em auto;
`;

CardImage.defaultProps = {
  src: logoImg,
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 3rem;
  text-align: center;
`;

const CardSummary = styled.p`
  font-size: 2rem;
  text-align: left;
`;

const Card = ({ title, text, image }) => {
  return (
    <CardWrapper>
      <CardImage src="./assets/AdventureKitty_NoLogo.png"></CardImage>
      <CardTitle>{title}</CardTitle>
      <p>{text}</p>
    </CardWrapper>
  );
};

export default Card;
