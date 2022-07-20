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

   .homepage {
     overflow-x: hidden;
   }
   .title {
     text-align: center;
     font-size: 10rem;
     text-transform: uppercase;
   }
   .about-line {
     border-top: 10px solid white;
   }
   .about-wrapper {
     /* width: 80%; */
     /* margin: auto; */
   }
 `}
`;

export default GlobalStyle;
