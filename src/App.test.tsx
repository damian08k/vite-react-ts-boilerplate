import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './App';
import { APP } from './testIds';

describe('Rendered view', () => {
  it('should render App component', () => {
    render(<App />);
    expect(screen.getByTestId(APP.APP)).toBeInTheDocument();
  });
});
