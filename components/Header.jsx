import react from "react";
// import { HeaderLogo, HeaderVideo } from "../components.styled/Header.styled";
import styled from "styled-components";
import logoImg from "../public/assets/DrillBuster_Logo.png";
import Video from "./Video";

const HeaderBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.216), rgba(0, 0, 0, 0.374)),
    url("./assets/AdventureKitty_NoLogo.png");
  background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-position: center;
`;

const HeaderLogo = styled.img`
  max-width: 100px;
  margin: 1em auto;
`;

HeaderLogo.defaultProps = {
  src: logoImg,
};

const HeaderVideo = styled.div`
  border: 2px solid black;
  margin: auto;
  padding: 2em 6em;
  margin-bottom: 2em;
  background-color: red;
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

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderLogo src="./assets/DrillBuster_Logo.png"></HeaderLogo>
      <HeaderVideo>
        <Video url="/videos/drill_buster_trailer.mp4" />
      </HeaderVideo>
      <HeaderCTAButton>Play Now</HeaderCTAButton>
    </HeaderBackground>
  );
};

export default Header;
