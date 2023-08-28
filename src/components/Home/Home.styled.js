import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 5em 10em;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2.5em 5em;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }

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
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 1;
  }
`;
