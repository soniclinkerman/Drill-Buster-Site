import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
 ${({ theme: { colors, mq, spacing } }) => css`
   html {
     font-size: 10px;
   }

   html,
   body {
     color: ${colors.primary};
     padding: 0;
     margin: 0;
     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
       Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   }

   body {
     font-size: 1.6rem;
     overflow-x: hidden;
   }

   a {
     color: inherit;
     text-decoration: none;
   }
   * {
     box-sizing: border-box;
     margin: 0;
   }

   .wrapper {
     padding-left: ${spacing.sm};
     padding-right: ${spacing.sm};
   }

   .wrapper--spikes {
     padding-top: ${spacing.xl};
     padding-bottom: ${spacing.xl};

     ${mq.min.tablet} {
       padding-top: 16%;
       padding-bottom: 16%;
     }
   }

   .card-wrapper {
     @media (min-width: 700px) {
       /* display: flex; */
       padding: 1.5em;
     }
   }

   .homepage {
     overflow-x: hidden;
   }
   .title {
     text-align: center;
     font-size: 5rem;
     text-transform: uppercase;
     letter-spacing: 0.25em;
   }

   .title-small {
     font-size: 4.5rem;
   }
   .about-line {
     border-top: 10px solid white;
   }
   .about-wrapper {
     /* width: 80%; */
     /* margin: auto; */
   }

   .image-container {
     @media (min-width: 1000px) {
       display: flex;
       justify-content: center;
     }
   }

   .card-reverse {
     flex-direction: row-reverse;
   }

   .social {
     margin: 0 1.5em;
   }
 `}
`;

export default GlobalStyle;
