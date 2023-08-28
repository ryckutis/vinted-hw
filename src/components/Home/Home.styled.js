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

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
