import React from 'react';
import {
  LogoContainer,
  ProgressBarColor,
  ProgressContainer,
} from './PageLoader.styled';
import logo from '../../assets/pexels-logo.png';

export default function PageLoader() {
  return (
    <>
      <ProgressContainer>
        <ProgressBarColor />
      </ProgressContainer>
      <LogoContainer>
        <img src={logo} alt="Pexels Logo" />
        <h3>PexelsClone</h3>
      </LogoContainer>
    </>
  );
}
