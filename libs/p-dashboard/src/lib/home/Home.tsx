import { StarServicesInfo } from '@multi-app-whitelabel/shared';
import { toDollarsAndCents } from '@multi-app-whitelabel/utils';
import { Card, Typography } from '@mui/material';

export function Home() {
  return (
    <div>
      <h1>Welcome to Home!</h1>
      <StarServicesInfo />

      <Card sx={{ maxWidth: 500, minHeight: 500, backgroundColor: 'warmNeutral.light' }} >
        <Typography variant="h5">This is just a test</Typography>
      </Card>

      <p>Other benefits worth {toDollarsAndCents(100000)} available to you</p>
    </div>
  );
}
