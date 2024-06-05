import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import styled from '@emotion/styled';

const ResultContainer = styled(Paper)`
  padding: 30px;
  background-color: #f6fff8;
  border-radius: 10px;
`;

const ButtonGroup = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: center; /* 居中按钮 */
  gap: 20px; /* 按钮之间的间距 */
`;

const StyledButton = styled(Button)`
  background-color: #fca311; /* 自定义颜色 */
  &:hover {
    background-color: #f6bd60; /* 悬停时的颜色 */
  }
`;

const SubmitButton = styled(Button)`
  background-color: #52796f; /* 自定义颜色 */
  &:hover {
    background-color: #84a98c; /* 悬停时的颜色 */
  }
`;

const ResultComponent = ({ result, handleBack, handleReset }) => (
  <ResultContainer elevation={3} style={{ userSelect: 'none' }}>
    <Typography variant="h5" align="center" gutterBottom>
      Result
    </Typography>
    <Typography align="center" style={{ userSelect: 'none' }}>{result}</Typography>
    <Typography align="center" variant="body1" paragraph style={{ userSelect: 'none' }}>
      {'\u00A0'} {/* 添加空白行 */}
    </Typography>
    <Typography align="center" variant="body1" paragraph style={{ userSelect: 'none' }}>
      If you have any questions or need further assistance, please refer to the official Australian Taxation Office (ATO) website for more information: <a href="https://www.ato.gov.au/individuals-and-families/your-tax-return" target="_blank" rel="noopener noreferrer">ATO Tax Return Information</a>.
    </Typography>
    <Typography align="center" variant="body1" paragraph style={{ userSelect: 'none' }}>
      {'\u00A0'} {/* 添加空白行 */}
    </Typography>
    <ButtonGroup>
      <StyledButton variant="contained" onClick={handleBack}>
        Back
      </StyledButton>
      <SubmitButton variant="contained" onClick={handleReset}>
        Restart
      </SubmitButton>
    </ButtonGroup>
  </ResultContainer>
);

export default ResultComponent;
