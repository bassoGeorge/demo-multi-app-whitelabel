import { Customisations  } from '@multi-app-whitelabel/p-dashboard';
import { CustomService } from '@multi-app-whitelabel/p-client-a-custom-feature';

/**
 * This function should be run before the react components using the customisations are rendered.
 * Safe to call before react is loaded.
 * Runs side-effect based custmomisations. Not the best approach but practical
 */
export function runClientSpecificCustomisations() {
  
  // Add a custom feature block to the list of configurable feature blocks
  Customisations.ConfigurableFeatureBlocks.push({
    title: 'Client A custom',
    component: CustomService
  })
}