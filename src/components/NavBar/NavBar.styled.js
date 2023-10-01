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
  width: 100%;
  background-color: #0da385;
  padding: 1em;
  text-align: center;
  animation: ${appearAnimation} 0.7s ease-in-out;

  a {
    background: none;
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: 0 2em;
    font-size: 24px;
    padding: 10px 20px;
    transition: 1s;

    @media (max-width: 768px) {
      font-size: 16px;
      margin: 0 0.5em;
    }

    :hover {
      color: yellow;
    }

    &.active {
      color: yellow;
      border-bottom: 3px solid yellow;
    }
  }
`;
