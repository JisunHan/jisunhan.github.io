import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={(theme) => css`
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: ${theme.typography.fontFamily.primary};
        font-size: ${theme.typography.fontSize.base};
        line-height: 1.6;
        color: ${theme.colors.text};
        background-color: ${theme.colors.background};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 ${theme.spacing.md};
      }

      @media (max-width: ${theme.breakpoints.mobile}) {
        .container {
          padding: 0 ${theme.spacing.sm};
        }
      }
    `}
  />
);

export default GlobalStyles;
