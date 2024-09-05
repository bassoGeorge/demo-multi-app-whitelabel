import { Box } from '@mui/material';

export function StarServiceTwo() {
  return (
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
  );
}
