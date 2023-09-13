import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import theme from "@/chakra/theme";
import Layout from "@/components/Layout";
import GlobalSettingsProvider from "@/components/GlobalSettingsContext";
import setupI18N from "@/i18n";

setupI18N();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalSettingsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalSettingsProvider>
    </ChakraProvider>
  );
}
