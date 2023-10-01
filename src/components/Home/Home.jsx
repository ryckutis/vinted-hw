import React, { useState, useEffect } from 'react';
import {
  GalleryContainer,
  Image,
  ImageContainer,
  ImageContent,
} from './Home.styled';
import SearchBar from '../SearchBar/SearchBar';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import NavBar from '../NavBar/NavBar';

export default function Home() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [likedImages, setLikedImages] = useState(() => {
    const storedLikedImages = JSON.parse(
      localStorage.getItem('likedImages') || '[]'
    );
    return storedLikedImages;
  });

  useEffect(() => {
    const storedLikedImages = JSON.parse(
      localStorage.getItem('likedImages') || '[]'
    );

    setLikedImages(storedLikedImages);

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
      const windowHeight = window.innerHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.scrollY;

      if (windowBottom >= docHeight - 1 && !loading) {
        fetchImages();
      }
    }
  }, [page, loading, initialFetchComplete]);

  const handleSearch = (searchResults) => {
    setImages(searchResults);
    setPage(1);
  };

  const handleLike = (imageId) => {
    setLikedImages((prevLikedImages) => {
      if (prevLikedImages.includes(imageId)) {
        return prevLikedImages.filter((id) => id !== imageId);
      } else {
        return [...prevLikedImages, imageId];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('likedImages', JSON.stringify(likedImages));
  }, [likedImages]);

  return (
    <>
      <NavBar />
      <SearchBar onSearch={handleSearch} />

      <GalleryContainer>
        {images.map((image) => (
          <ImageContainer key={image.id}>
            <Image src={image.src.medium} alt={image.alt} />
            <ImageContent>
              <h3>{image.alt}</h3>
              <hr />
              <i>{image.photographer}</i>
              <button onClick={() => handleLike(image.id)}>
                {likedImages.includes(image.id) ? (
                  <AiFillHeart />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
            </ImageContent>
          </ImageContainer>
        ))}
      </GalleryContainer>
    </>
  );
}
