import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { SandboxTheme } from '@multi-app-whitelabel/theme-sandbox';
import { ThemeProvider } from '@multi-app-whitelabel/design-system';
import {
  ContentProvider,
  StandardAppLayout,
} from '@multi-app-whitelabel/shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portal-sandbox!</title>
      </Head>
      <main className="app">
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={SandboxTheme}>
            <ContentProvider client='sandbox'>
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
