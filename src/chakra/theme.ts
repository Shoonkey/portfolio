import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    bg: {
      500: '#1a202c',
      800: '#0e1625'
    },
    text: {
      500: '#e2e2e2',
      800: '#818181'
    },
    primary: {
      500: '#ff8080'
    }
  },
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0,
      }
    },
  },
});

export default theme;
