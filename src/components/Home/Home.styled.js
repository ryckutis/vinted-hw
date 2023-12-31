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

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 3em 10em;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2.5em 5em;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  animation: ${appearAnimation} 0.7s ease-in-out;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export const ImageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 1;
  }

  h3,
  i {
    background: none;
    color: whitesmoke;
    margin: 0;
  }

  hr {
    width: 5em;
  }

  button {
    position: absolute;
    top: 10px;
    left: 10px;
    background: none;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 32px;
    padding: 0;
    margin: 0;

    svg {
      background-color: transparent;
      border-radius: 5px;
    }

    :hover {
      color: #e9452b;
    }
  }
`;
