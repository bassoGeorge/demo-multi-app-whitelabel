import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { SandboxTheme } from '@multi-app-whitelabel/theme-sandbox';
import { ThemeProvider } from '@multi-app-whitelabel/design-system';
import { StandardAppLayout } from '@multi-app-whitelabel/shared';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portal-sandbox!</title>
      </Head>
      <main className="app">
        <ThemeProvider theme={SandboxTheme}>
          <StandardAppLayout>
            <Component {...pageProps} />
          </StandardAppLayout>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
