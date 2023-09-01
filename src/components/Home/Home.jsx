import React, { useState, useEffect } from 'react';
import {
  GalleryContainer,
  Image,
  ImageContainer,
  ImageContent,
} from './Home.styled';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_PEXELS_API;

    fetch(`https://api.pexels.com/v1/curated?per_page=15`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setImages(data.photos);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <GalleryContainer>
      {images.map((image) => (
        <ImageContainer key={image.id}>
          <Image src={image.src.medium} alt={image.alt} />
          <ImageContent>
            <h3>{image.alt}</h3>
            <hr />
            <i>{image.photographer}</i>
          </ImageContent>
        </ImageContainer>
      ))}
    </GalleryContainer>
  );
}
