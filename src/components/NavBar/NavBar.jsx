import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Gallery </Link>
      <Link to="/favorites">Favorite images </Link>
    </nav>
  );
}
