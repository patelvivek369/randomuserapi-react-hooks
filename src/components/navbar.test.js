import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';
import { GlobalDataContext } from '../context/AppContextProvider';
import menuItems from '../data/menu-list';

describe('Navbar component', () => {
  const mockContext = {
    showMenu: true,
    setSiteData: jest.fn(),
  };

  it('should render the navbar component with users and menu items', () => {
    render(
      <GlobalDataContext.Provider value={mockContext}>
        <Navbar />
      </GlobalDataContext.Provider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Firstname LastName')).toBeInTheDocument();
  });

  it('should close the nav menu when the close button is clicked', () => {
    render(
      <GlobalDataContext.Provider value={mockContext}>
        <Navbar />
      </GlobalDataContext.Provider>
    );

    fireEvent.click(screen.getByTestId('close-btn'));

    expect(mockContext.setSiteData).toHaveBeenCalledWith({
      ...mockContext,
      showMenu: false,
    });
  });

  it('should render menu items with correct names and icons', () => {
    render(
      <GlobalDataContext.Provider value={mockContext}>
        <Navbar />
      </GlobalDataContext.Provider>
    );

    menuItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByTestId(`menu-item-${item.icon}`)).toBeInTheDocument();
    });
  });
});
