import react from "react";
// import { HeaderLogo, HeaderVideo } from "../components.styled/Header.styled";
import styled from "styled-components";
import logoImg from "../public/assets/DrillBuster_Logo.png";
import Video from "./Video";

const HeaderBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.216), rgba(0, 0, 0, 0.374)),
    url("./assets/AdventureKitty_NoLogo.png");
  /* background-color: red; */
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-position: center;
  margin-bottom: 2.5em;
`;

const HeaderLogo = styled.img`
  max-width: 500px;
  margin: 1em auto;
  width: 40%;

  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

HeaderLogo.defaultProps = {
  src: logoImg,
};

const HeaderVideo = styled.div`
  /* border: 2px solid black; */
  margin: auto;
  height: 222px;
  width: 400px;
  margin-bottom: 2em;
  color: white;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 2rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
const HeaderCTAButton = styled(Button)`
  display: flex;
  margin: auto;
  font-size: 1.75rem;
  color: #ffffff;
  background-color: #fe942f;
  border: 2px solid #ffffff;
  border-radius: 0;
  padding: 0.5em 2.5em;
  margin-bottom: 2em;
`;

const HeaderContainer = styled.div``;

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderLogo src="./assets/DrillBuster_Logo.png"></HeaderLogo>
      <HeaderContainer>
        <HeaderVideo>
          <Video url="https://youtu.be/OHL52p5Y8fc" />
        </HeaderVideo>
        <HeaderCTAButton>Play Now</HeaderCTAButton>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Header;
