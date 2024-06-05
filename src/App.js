import React from 'react';
import TaxCalculator from './components/TaxCalculator';
import styled from '@emotion/styled';

const BackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/image1.jpg'); 
  background-size: cover;
  background-position: center;
`;

function App() {
  return (
    <BackgroundContainer>
      <TaxCalculator />
    </BackgroundContainer>
  );
}

export default App;
