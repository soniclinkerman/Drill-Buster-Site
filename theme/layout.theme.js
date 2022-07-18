export const spacing = {
  xs: "0.8rem",
  s: "1.6rem",
  sm: "2rem",
  m: "2.4rem",
  ml: "3rem",
  l: "4rem",
  xl: "8rem",
  xxl: "12rem",
};

export const sizes = {
  header: "55px",
  container: {
    s: "800px",
    m: "960px",
  },
};

export const breakpoints = {
  mobile: 425,
  lMobile: 600,
  tablet: 768,
  lTablet: 980,
  laptop: 1024,
  desktop: 1440,
};

export const mq = {
  min: {
    mobile: `@media only screen and (min-width: ${breakpoints.mobile}px)`,
    lMobile: `@media only screen and (min-width: ${breakpoints.lMobile}px)`,
    tablet: `@media only screen and (min-width: ${breakpoints.tablet}px)`,
    lTablet: `@media only screen and (min-width: ${breakpoints.lTablet}px)`,
    laptop: `@media only screen and (min-width: ${breakpoints.laptop}px)`,
    desktop: `@media only screen and (min-width: ${breakpoints.desktop}px)`,
  },
  max: {
    mobile: `@media only screen and (max-width: ${breakpoints.mobile}px)`,
    lMobile: `@media only screen and (max-width: ${breakpoints.lMobile}px)`,
    tablet: `@media only screen and (max-width: ${breakpoints.tablet}px)`,
    lTablet: `@media only screen and (max-width: ${breakpoints.lTablet}px)`,
    laptop: `@media only screen and (max-width: ${breakpoints.laptop}px)`,
    desktop: `@media only screen and (max-width: ${breakpoints.desktop}px)`,
  },
};
