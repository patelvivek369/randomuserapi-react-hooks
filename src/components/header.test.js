import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './header';
import { GlobalDataContext } from '../context/AppContextProvider';

describe('Header component', () => {
  const mockContext = {
    showMenu: false,
    setSiteData: jest.fn(),
  };

  it('should render the header component', () => {
    render(
      <GlobalDataContext.Provider value={mockContext}>
        <Header />
      </GlobalDataContext.Provider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('should show the mobile nav menu on click', () => {
    render(
      <GlobalDataContext.Provider value={mockContext}>
        <Header />
      </GlobalDataContext.Provider>
    );

    fireEvent.click(screen.queryByTestId('mobile-nav'));

    expect(mockContext.setSiteData).toHaveBeenCalledWith({
      ...mockContext,
      showMenu: true,
    });
  });

  it('should render a search input', () => {
    render(
      <GlobalDataContext.Provider value={mockContext}>
        <Header />
      </GlobalDataContext.Provider>
    );

    // expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

});