import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { GlobalDataContext } from './context/AppContextProvider';

describe('App', () => {
  test('renders navbar and header', () => {
    const sitedata = {
      showSidebar: false,
      users: [],
      filterUsers: [],
      selectedUser: {
        name: { first: 'John', last: 'Doe' },
        location: { city: 'New York', country: 'USA' },
        cell: '555-555-5555',
        email: 'johndoe@example.com'
      },
      computed: {
        titles: ['India', 'USA']
      },
      setSiteData: jest.fn()
    };
    render(
      <GlobalDataContext.Provider value={sitedata}>
        <App />
        </GlobalDataContext.Provider>
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  test('renders filter dropdown', () => {
    const sitedata = {
      showSidebar: false,
      users: [],
      filterUsers: [],
      selectedUser: {
        name: { first: 'John', last: 'Doe' },
        location: { city: 'New York', country: 'USA' },
        cell: '555-555-5555',
        email: 'johndoe@example.com'
      },
      computed: {
        titles: ['India', 'USA']
      },
      setSiteData: jest.fn()
    };
    render(
      <GlobalDataContext.Provider value={sitedata}>
        <App />
        </GlobalDataContext.Provider>
    );
    expect(screen.getByTestId('filter-dropdown')).toBeInTheDocument();
  });

});
