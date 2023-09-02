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

export const Container = styled.div`
  text-align: center;
  animation: ${appearAnimation} 0.7s ease-in-out;

  h2 {
    font-size: 24px;
    margin: 1em 0;
    color: #0da385;
  }

  p {
    font-size: 18px;
    margin: 0.25em 0;
  }
`;
