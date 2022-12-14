import { createGlobalStyle } from "styled-components";
import { Comic_Neue as ComicNeue } from "@next/font/google";

export const comicNeue = ComicNeue({
  variable: "--comicNeue",
  style: "normal",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  fallback: ["Inter", "Helvetica", "Arial", "sans-serif"],
});

export default createGlobalStyle`
  :root {
    /* Colors */
    --skyHSL: 213 96.9% 87.3%;

    --bgMain: ${(props) => props.theme.colors.bgMain};
    --bgSecondary: ${(props) => props.theme.colors.bgSecondary};
    --teal: ${(props) => props.theme.colors.teal};
    --primary: ${(props) => props.theme.colors.primary};
    --secondary: ${(props) => props.theme.colors.secondary};
    --slate: ${(props) => props.theme.colors.slate};
    --sky: hsl(var(--skyHSL));
    --skyMuted: hsla(var(--skyHSL) / 0.75);
    --skyText: hsla(var(--skyHSL) / 0.5);

    /* Shadow */
    --shadow: ${(props) => props.theme.shadow};

    /* Breakpoints */
    --mobileS: ${(props) => props.theme.breakpoints.mobileS};
    --mobileM: ${(props) => props.theme.breakpoints.mobileM};
    --mobileL: ${(props) => props.theme.breakpoints.mobileL};
    --tablet: ${(props) => props.theme.breakpoints.tablet};
    --laptop: ${(props) => props.theme.breakpoints.laptop};
    --laptopL: ${(props) => props.theme.breakpoints.laptopL};
    --desktop: ${(props) => props.theme.breakpoints.desktop};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0.05em;

    /* Focus */
    &:focus-visible {
      outline-width: 2px;
      outline-style: dashed;
      outline-color: var(--teal);
      outline-offset: 5px;
      transition-duration: 300ms;
    }
  }

  ::selection {
    background-color: var(--slate);
    color: var(--teal);
  }

  body {
    overflow-x: hidden;
    background-color: var(--bgMain);
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, p, li {
    font-family: Inter;
  }

  h1 {
    color: var(--sky);
  }

  h2 {
    color: var(--teal);
  }

  a {
    text-decoration: none;
    color: var(--sky);
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--teal);
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: var(--bgMain);
  }

  ::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 0.75rem;
    background-clip: padding-box;
    background-color: var(--teal);

    &:hover {
      background-color: var(--sky);
    }
  }
`;
