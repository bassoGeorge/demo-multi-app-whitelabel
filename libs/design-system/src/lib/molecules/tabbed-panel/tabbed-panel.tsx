import {
  Box,
  TabProps as MuiTabProps,
  Tabs as MuiTabs,
  Tab as MuiTab,
} from '@mui/material';

/**
 * This file is just for demo
 */

export const Tabs = MuiTabs;

// export const Tab = MuiTab;

interface TabProps extends MuiTabProps {
  /**
   * used to set up ids and labels.
   * use one for the whole tab set
   */
  tabSetPrefix?: string;

  /**
   * Index of this tab
   */
  index: number;
}

export function Tab({ tabSetPrefix, index, ...other }: TabProps) {
  tabSetPrefix = tabSetPrefix || 'ds';
  return (
    <MuiTab
      id={`${tabSetPrefix}-tab-${index}`}
      aria-controls={`${tabSetPrefix}-tabpanel-${index}`}
      {...other}
    />
  );
}

interface TabPanelProps {
  children?: React.ReactNode;

  /**
   * used to set up ids and labels.
   * use one for the whole tab set
   */
  tabSetPrefix?: string;

  /**
   * Index of this tab
   */
  index: number;

  /**
   * Currently selected value
   */
  value: number;
}

export function TabPanel({
  children,
  value,
  index,
  tabSetPrefix,
  ...other
}: TabPanelProps) {
  tabSetPrefix = tabSetPrefix || 'ds';
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${tabSetPrefix}-tabpanel-${index}`}
      aria-labelledby={`${tabSetPrefix}-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
