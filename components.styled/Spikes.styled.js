import styled, { css } from "styled-components";

const SpikesStyled = styled.div`
  ${({ theme: { colors, breakpoints, mq } }) => css`
    position: absolute;
    width: ${breakpoints.tablet}px;
    top: -10rem;
    overflow-x: hidden;

    svg {
      width: 125%;
      margin-left: 0%;

      path {
        fill: ${colors.black};
      }
    }

    &.light {
      svg {
        path {
          fill: ${colors.white};
        }
      }
    }

    &.flip {
      &--h {
        transform: rotateY(180deg);
      }
      &--v {
        transform: rotate(180deg);
        top: -6rem;
      }

      &--z {
        /* transform: rotate(180deg); */
        top: -18rem;
      }
    }

    ${mq.min.tablet} {
      width: 100%;
      top: -14%;
    }
    ${mq.min.laptop} {
      width: 100%;
      top: -18%;
    }

    @keyframes spikesSlide {
      from {
        margin-left: -25%;
      }
      to {
        margin-left: 0%;
      }
    }
  `}
`;

export default SpikesStyled;
