import React, { useState } from 'react';
import { createClient } from 'pexels';
import { SearchContainer, SearchInput, SearchButton } from './SearchBar.styled';

const client = createClient(
  'z9CYim5XI65TafW1bw2NCjDbcdvTstG2ssBCmB04uqE1xTvdR0KUy7SZ'
);

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await client.photos.search({
        query: searchTerm,
        per_page: 15,
      });
      onSearch(response.photos);
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
