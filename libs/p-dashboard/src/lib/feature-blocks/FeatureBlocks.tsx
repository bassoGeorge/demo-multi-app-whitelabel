import { Box } from '@mui/material';
import { Tab, Tabs, TabPanel } from '@multi-app-whitelabel/design-system';
import { useState } from 'react';

export function FeatureBlocks() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" index={0} />
          <Tab label="Item Two" index={1} />
          <Tab label="Item Three" index={2} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Box>
            <img src="/illustrations/bookshelf.svg" width={200} alt="Bookshelf" />
          </Box>
          <Box>
            <img src="/illustrations/calculator.svg" width={200} alt="Calculator" />
          </Box>
          <Box>
            <img src="/illustrations/pie-chart.svg" width={200} alt="Pie Chart" />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}