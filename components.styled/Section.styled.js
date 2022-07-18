import styled, { css } from "styled-components";

const SectionStyled = styled.section`
  ${({ theme: { colors }, bgImage }) => css`
    min-height: 100vh;
    background-color: ${colors.black};
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${colors.white};
    position: relative;
    z-index: 1;

    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background: ${colors.black};
      opacity: 0.5;
      z-index: -1;
    }
  `}
`;

export default SectionStyled;
