import React from 'react';
import { TextField, MenuItem, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledFormControl = styled(FormControl)`
  margin-bottom: 20px;
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

const FormComponent = ({ incomeYear, setIncomeYear, taxableIncome, setTaxableIncome, residencyStatus, setResidencyStatus, handleSubmit, handleReset }) => (
  <>
    <Typography variant="h4" align="center" gutterBottom>
      Tax Calculator
    </Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        select
        label="Select an income year"
        value={incomeYear}
        onChange={(e) => setIncomeYear(e.target.value)}
        fullWidth
        margin="normal"
        required
        style={{ userSelect: 'none' }}
      >
        <MenuItem value="2024" style={{ userSelect: 'none' }}>2023 - 2024</MenuItem>
        <MenuItem value="2023" style={{ userSelect: 'none' }}>2022 - 2023</MenuItem>
        <MenuItem value="2022" style={{ userSelect: 'none' }}>2021 - 2022</MenuItem>
      </TextField>

      <TextField
        label="Enter your total taxable income"
        type="number"
        value={taxableIncome}
        onChange={(e) => setTaxableIncome(e.target.value)}
        fullWidth
        margin="normal"
        required
        style={{ userSelect: 'none' }}
      />

      <StyledFormControl component="fieldset" style={{ userSelect: 'none' }}>
        <FormLabel component="legend" style={{ userSelect: 'none' }}>Select your residency status</FormLabel>
        <RadioGroup
          value={residencyStatus}
          onChange={(e) => setResidencyStatus(e.target.value)}
          style={{ userSelect: 'none' }}
        >
          <FormControlLabel value="resident" control={<Radio />} label="Resident for full year" style={{ userSelect: 'none' }} />
          <FormControlLabel value="non-resident" control={<Radio />} label="Non-resident for full year" style={{ userSelect: 'none' }} />
          <FormControlLabel value="part-year" control={<Radio />} label="Part-year resident" style={{ userSelect: 'none' }} />
        </RadioGroup>
      </StyledFormControl>

      <ButtonGroup>
        <StyledButton variant="contained" onClick={handleReset}>
          Clear
        </StyledButton>
        <SubmitButton type="submit" variant="contained">
          Submit
        </SubmitButton>
      </ButtonGroup>
    </form>
  </>
);

export default FormComponent;
