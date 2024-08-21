import { StarServicesInfo } from '@multi-app-whitelabel/shared';
import { toDollarsAndCents } from '@multi-app-whitelabel/utils';

export function Home() {
  return (
    <div>
      <h1>Welcome to Home!</h1>
      <StarServicesInfo />

      <p>Other benefits worth {toDollarsAndCents(100000)} available to you</p>
    </div>
  );
}
