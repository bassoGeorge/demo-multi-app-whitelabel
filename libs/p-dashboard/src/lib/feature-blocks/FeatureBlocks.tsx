import { Box } from '@mui/material';
import { Tab, Tabs, TabPanel } from '@multi-app-whitelabel/design-system';
import { useState } from 'react';
import { ConfigurableFeatureBlocks } from './CONFIG_feature-blocks';

export function FeatureBlocks() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            ConfigurableFeatureBlocks.map((block, index) => (
              <Tab key={index} label={block.title} index={index} />
            ))
          }
        </Tabs>
      </Box>
      {
        ConfigurableFeatureBlocks.map((block, index) => (
          <TabPanel key={index} value={value} index={index}>
            <block.component />
          </TabPanel>
        ))
      }
    </Box>
  );
}
