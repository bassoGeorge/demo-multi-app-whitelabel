import { StarServiceOne, useContent } from '@multi-app-whitelabel/shared';
import { toDollarsAndCents } from '@multi-app-whitelabel/utils';
import { Card, Typography } from '@mui/material';
import { FeatureBlocks } from '../feature-blocks/FeatureBlocks';
import { useEffect } from 'react';

export function Home() {
  const { common, page } = useContent();

  useEffect(() => {
    if (common && page) {
      console.log("We have common content: ", common);
      console.log("And page content: ", page);
    }
  }, [common, page])

  return (
    <div>
      <h1>Welcome to Home!</h1>
      <StarServiceOne />

      <Card sx={{ maxWidth: 500, minHeight: 500, backgroundColor: 'warmNeutral.light' }} >
        <Typography variant="h5">This is just a test</Typography>
      </Card>

      <p>Other benefits worth {toDollarsAndCents(100000)} available to you</p>

      <FeatureBlocks />
    </div>
  );
}
