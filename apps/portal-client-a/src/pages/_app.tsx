import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ClientATheme } from '@multi-app-whitelabel/theme-client-a';
import { ThemeProvider } from '@multi-app-whitelabel/design-system';
import { StandardAppLayout } from '@multi-app-whitelabel/shared';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portal-client-a!</title>
      </Head>
      <main className="app">
        <ThemeProvider theme={ClientATheme}>
          <StandardAppLayout>
            <Component {...pageProps} />
          </StandardAppLayout>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
