import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ClientATheme } from '@multi-app-whitelabel/theme-client-a';
import { ThemeProvider } from '@multi-app-whitelabel/design-system';
import {
  ContentProvider,
  StandardAppLayout,
} from '@multi-app-whitelabel/shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { runClientSpecificCustomisations } from '../runClientSpecificCustomisations';

runClientSpecificCustomisations();

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portal-client-a!</title>
      </Head>
      <main className="app">
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={ClientATheme}>
            <ContentProvider client="client-a">
              <StandardAppLayout>
                <Component {...pageProps} />
              </StandardAppLayout>
            </ContentProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default CustomApp;
