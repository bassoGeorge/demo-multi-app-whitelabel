import { ComponentType } from 'react';
import { StarServiceOne, StarServiceTwo } from '@multi-app-whitelabel/shared';

/**
 * Modify this array in place before React to configure client base feature list
 */
export type FeatureBlockConfig = {
  title: string;
  component: ComponentType
}

export const ConfigurableFeatureBlocks: Array<FeatureBlockConfig> = [
  {
    title: 'Star Service #1',
    component: StarServiceOne
  },
  {
    title: 'Star Service #2',
    component: StarServiceTwo
  }
]