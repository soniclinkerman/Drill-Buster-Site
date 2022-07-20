import styled, { css } from "styled-components";

const FooterStyled = styled.footer`
  ${({ theme: { colors, spacing, mq }, bgImage }) => css`
    position: relative;
    min-height: 50vh;
    z-index: 1;
    color: ${colors.white};
    background: url(${bgImage}) no-repeat;
    background-size: cover;
    text-align: center;
    letter-spacing: 0.8rem;

    padding-top: ${spacing.xxl};
    padding-bottom: ${spacing.xl};

    ${mq.min.tablet} {
      padding-top: 18%;
    }

    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: ${colors.black};
      opacity: 0.5;
      z-index: -1;
    }

    .footer__title {
      text-transform: uppercase;
      background: ${colors.primary};
      width: 100%;
      max-width: 30rem;
      padding: ${spacing.sm};
      margin: auto;
      margin-bottom: ${spacing.sm};
      margin-bottom: 1.5em;
    }

    .footer__text {
      text-transform: capitalize;
      font-size: 2.5rem;
    }

    .footer__cta {
      display: block;
      background: ${colors.white};
      color: ${colors.primary};
      border: 2px solid ${colors.primary};
      width: fit-content;
      margin: ${spacing.sm} auto;
      padding: ${spacing.xs} ${spacing.sm};
      font-weight: bold;
      text-transform: uppercase;
      font-size: 2rem;
      margin-bottom: 2em;
      font-weight: bold;
    }
  `}
`;

export default FooterStyled;
