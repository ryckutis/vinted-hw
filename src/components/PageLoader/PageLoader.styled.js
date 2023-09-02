import styled, { keyframes } from 'styled-components';

const fillAnimation = keyframes`
  0% {
    width: 0%;
  }
  25% {
    width: 50%;
  }
  50% {
    width: 75%;
  }
  75% {
    width: 85%;
  }
  100% {
    width: 100%;
  }
`;

export const ProgressContainer = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  background-color: #0a856f;
  border-radius: 15px;
  overflow: hidden;
`;

export const ProgressBarColor = styled.div`
  position: absolute;
  background-color: #0da385;
  width: 0;
  height: 100%;
  border-radius: 15px;
  animation: ${fillAnimation} 4s infinite linear;
`;
