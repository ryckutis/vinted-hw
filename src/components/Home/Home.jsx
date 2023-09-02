import React, { useState, useEffect } from 'react';
import {
  GalleryContainer,
  Image,
  ImageContainer,
  ImageContent,
} from './Home.styled';
import SearchBar from '../SearchBar/SearchBar';

export default function Home() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_PEXELS_API;

    const fetchImages = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.pexels.com/v1/curated?per_page=15&page=${page}`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );

        const data = await response.json();

        if (data.photos.length > 0) {
          setImages((prevImages) => [...prevImages, ...data.photos]);
          setPage(page + 1);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }

      setLoading(false);
    };

    if (!initialFetchComplete && page === 1) {
      fetchImages();
      setInitialFetchComplete(true);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !loading
      ) {
        fetchImages();
      }
    }
  }, [page, loading, initialFetchComplete]);

  const handleSearch = (searchResults) => {
    setImages(searchResults);
    setPage(1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
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
    </>
  );
}
