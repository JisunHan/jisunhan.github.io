/// <reference types="vite/client" />

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      success: string;
      warning: string;
      error: string;
      gray: {
        light: string;
        medium: string;
        dark: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
