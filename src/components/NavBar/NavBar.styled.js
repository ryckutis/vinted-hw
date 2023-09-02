import styled, { keyframes } from 'styled-components';

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledNav = styled.nav`
  background-color: #0da385;
  padding: 1em;
  text-align: center;
  animation: ${appearAnimation} 0.7s ease-in-out;

  a {
    background: none;
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: 0 1em;
    font-size: 18px;
    padding: 10px 20px;

    &:hover {
      outline: 2px solid white;
      border-radius: 15px;
    }

    &.active {
      color: yellow;
    }
  }
`;
