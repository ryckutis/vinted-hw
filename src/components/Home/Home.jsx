import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import { GalleryContainer, Image } from './Home.styled';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_PEXELS_API;
    const client = createClient(apiKey);

    client.photos
      .curated({ per_page: 20 })
      .then((photosResponse) => {
        setImages(photosResponse.photos);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <GalleryContainer>
      {images.map((image) => (
        <Image key={image.id} src={image.src.medium} alt={image.photographer} />
      ))}
    </GalleryContainer>
  );
}
