import { Home } from '@multi-app-whitelabel/p-dashboard';
import { toDollarsAndCents } from '@multi-app-whitelabel/utils';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <main>
      <Home />
      <p>
        In other news, you have {toDollarsAndCents(100000)} in available future benefits
      </p>
    </main>
  );
}

export default Index;
