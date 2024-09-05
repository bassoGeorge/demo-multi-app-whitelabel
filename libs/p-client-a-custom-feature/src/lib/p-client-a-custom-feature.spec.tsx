import { render } from '@testing-library/react';

import PClientACustomFeature from './p-client-a-custom-feature';

describe('PClientACustomFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PClientACustomFeature />);
    expect(baseElement).toBeTruthy();
  });
});
