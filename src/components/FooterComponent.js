import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Footer = styled(Box)`
  text-align: center;
  color: white; 
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FooterComponent = () => (
  <Footer>
    <Typography variant="body2">
      © 2024-present By Xiaoting Ma. All rights reserved.
    </Typography>
  </Footer>
);

export default FooterComponent;
