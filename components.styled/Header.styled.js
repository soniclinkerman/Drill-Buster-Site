import styled from "styled-components";
import logoImg from "../public/assets/DrillBuster_Logo.png";

export const HeaderLogo = styled.img`
  max-width: 100px;
  margin: 1em auto;
`;

HeaderLogo.defaultProps = {
  src: logoImg,
};

export const HeaderVideo = styled.div`
  border: 2px solid black;
  margin: auto;
  padding: 2em 6em;
`;
