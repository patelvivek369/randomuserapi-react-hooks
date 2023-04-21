import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuItem from './menu-item';

describe('MenuItem component', () => {
  it('should render the name prop', () => {
    const name = 'Home';
    render(<MenuItem name={name} />);

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('should render the path prop as a link', () => {
    const path = '/home';
    render(<MenuItem path={path} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', path);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
});