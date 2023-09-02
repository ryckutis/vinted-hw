import React, { useState, useEffect } from 'react';
import {
  GalleryContainer,
  Image,
  ImageContainer,
  ImageContent,
} from '../Home/Home.styled';
import NavBar from '../NavBar/NavBar';
import { BsFillHeartbreakFill } from 'react-icons/bs';
import { Container } from './Favorites.styled';

export default function Favorites() {
  const [likedImagesData, setLikedImagesData] = useState([]);

  useEffect(() => {
    const storedLikedImages = JSON.parse(
      localStorage.getItem('likedImages') || '[]'
    );

    const apiKey = process.env.REACT_APP_PEXELS_API;
    const requests = storedLikedImages.map(async (imageId) => {
      const response = await fetch(
        `https://api.pexels.com/v1/photos/${imageId}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      return data;
    });

    Promise.all(requests)
      .then((imageData) => {
        setLikedImagesData(imageData);
      })
      .catch((error) => {
        console.error('Error fetching liked images:', error);
      });
  }, []);

  const handleRemove = (imageId) => {
    const confirmed = window.confirm(
      'Are you sure you want to remove this image from your collection?'
    );

    if (confirmed) {
      setLikedImagesData((prevData) =>
        prevData.filter((image) => image.id !== imageId)
      );

      const storedLikedImages = JSON.parse(
        localStorage.getItem('likedImages') || '[]'
      );
      const updatedLikedImages = storedLikedImages.filter(
        (id) => id !== imageId
      );
      localStorage.setItem('likedImages', JSON.stringify(updatedLikedImages));
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <h2>Favorites</h2>
        {likedImagesData.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <GalleryContainer>
            {likedImagesData.map((image) => (
              <ImageContainer key={image.id}>
                <Image src={image.src.medium} alt={image.alt} />
                <ImageContent>
                  <h3>{image.alt}</h3>
                  <hr />
                  <i>{image.photographer}</i>
                  <button onClick={() => handleRemove(image.id)}>
                    <BsFillHeartbreakFill />
                  </button>
                </ImageContent>
              </ImageContainer>
            ))}
          </GalleryContainer>
        )}
      </Container>
    </>
  );
}
