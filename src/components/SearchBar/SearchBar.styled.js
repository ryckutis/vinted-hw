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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5em auto;
  animation: ${appearAnimation} 0.7s ease-in-out;
`;

export const SearchInput = styled.input`
  padding: 1em;
  width: 300px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    border-color: #0da385;
    box-shadow: 0px 0px 5px rgba(13, 163, 133, 0.5);
  }
`;

export const SearchButton = styled.button`
  padding: 1em;
  margin: auto 1em;
  background-color: #0da385;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: #0a856f;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
