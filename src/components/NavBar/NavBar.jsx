import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledNav } from './NavBar.styled';

export default function NavBar() {
  const location = useLocation();

  return (
    <StyledNav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Gallery
      </Link>
      <Link
        to="/favorites"
        className={location.pathname === '/favorites' ? 'active' : ''}
      >
        Favorites
      </Link>
    </StyledNav>
  );
}
