import React from 'react';
import { LoaderContainer, LoaderSpinner } from './PageLoader.styled';

export default function PageLoader() {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
}
