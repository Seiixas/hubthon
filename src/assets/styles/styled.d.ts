import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      grey: string;
      text: string;
      background: string;
    };
  }
}
