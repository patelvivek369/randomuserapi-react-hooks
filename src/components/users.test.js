import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

describe('Users component', () => {
  it('should render the user\'s name and title', () => {
    const user = {
      fname: 'John',
      lname: 'Doe',
      title: 'India'
    };

    render(<Users fname={user.fname} lname={user.lname} title={user.title} />);

    expect(screen.getByText(`${user.fname} ${user.lname}`)).toBeInTheDocument();
    expect(screen.getByText(user.title)).toBeInTheDocument();
  });

  it('should render the user\'s initials as image', () => {
    const user = {
      fname: 'John',
      lname: 'Doe'
    };

    render(<Users fname={user.fname} lname={user.lname} />);

    expect(screen.getByText(`${user.fname[0]}${user.lname[0]}`)).toBeInTheDocument();
  });

});