import { render, screen } from '@testing-library/react';
import { GlobalDataContext } from '../context/AppContextProvider';
import Sidebar from './sidebar';

test('Sidebar is initially hidden', () => {
  const sitedata = {
    showSidebar: false,
    selectedUser: {
      name: { first: 'John', last: 'Doe' },
      location: { city: 'New York', country: 'USA' },
      cell: '555-555-5555',
      email: 'johndoe@example.com'
    },
    setSiteData: jest.fn()
  };
  render(
      <GlobalDataContext.Provider value={sitedata}>
        <Sidebar />
        </GlobalDataContext.Provider>
    );
  expect(screen.getByTestId('users-details')).toHaveClass('users-details');
  expect(screen.getByTestId('users-details')).not.toHaveClass('show');
});

test('Sidebar becomes visible when showSidebar is true', () => {
    // render(<Sidebar />);
    // expect(screen.getByTestId('.users-details')).not.toHaveClass('show');
    const sitedata = {
      showSidebar: true,
      selectedUser: {
        name: { first: 'John', last: 'Doe' },
        location: { city: 'New York', country: 'USA' },
        cell: '555-555-5555',
        email: 'johndoe@example.com'
      },
      setSiteData: jest.fn()
    };
    render(
        <GlobalDataContext.Provider value={sitedata}>
          <Sidebar />
        </GlobalDataContext.Provider>
      );
    // render(<Sidebar />, { wrapper: ({ children }) => (
    //   <GlobalDataContext.Provider value={sitedata}>
    //     {children}
    //   </GlobalDataContext.Provider>
    // )});
    expect(screen.getByTestId('users-details')).toHaveClass('show');
  });