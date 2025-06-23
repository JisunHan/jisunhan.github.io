import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      gray: {
        light: string;
        medium: string;
        dark: string;
      };
    };
    typography: {
      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        base: string;
        '3xl': string;
        '4xl': string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      mobile: string;
    };
  }
}
