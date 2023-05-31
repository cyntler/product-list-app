const breakpoints = {
  mobile: 320,
  tablet: 750,
  desktop: 1000,
};

export const styleFor = (breakpoint: keyof typeof breakpoints) =>
  `@media screen and (min-width: ${breakpoints[breakpoint]}px)`;
