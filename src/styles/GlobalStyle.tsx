import { css, Global } from '@emotion/react';
import React from 'react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
          'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);
