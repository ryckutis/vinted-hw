import React, { useState } from 'react';
import { SearchContainer, SearchInput, SearchButton } from './SearchBar.styled';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const apiKey = process.env.REACT_APP_PEXELS_API;
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=15`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      onSearch(data.photos);
      setSearchTerm('');
    } catch (error) {
      console.error('Error searching images:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for images..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
}
