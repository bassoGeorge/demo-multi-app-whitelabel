import { Button } from '@multi-app-whitelabel/design-system'
import { toDollarsAndCents } from '@multi-app-whitelabel/utils';

export function StarServicesInfo() {
  return (
    <div>
      <h1>Welcome to StarServicesInfo!</h1>
      <p>You have {toDollarsAndCents(30000)} in available benefits</p>
      <Button color='secondary' variant='contained'>Hey there</Button>
    </div>
  );
}