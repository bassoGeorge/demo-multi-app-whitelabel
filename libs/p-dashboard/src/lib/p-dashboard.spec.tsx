import { render } from '@testing-library/react';

import PDashboard from './p-dashboard';

describe('PDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
