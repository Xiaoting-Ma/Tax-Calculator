import React from 'react';
import { TextField, MenuItem, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledFormControl = styled(FormControl)`
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  min-width: 300px; /* Ensure a minimum width */
`;

const ButtonGroup = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #fca311;
  &:hover {
    background-color: #f6bd60;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #52796f;
  &:hover {
    background-color: #84a98c;
  }
`;

const FormComponent = ({ incomeYear, setIncomeYear, taxableIncome, setTaxableIncome, residencyStatus, setResidencyStatus, monthsInAustralia, setMonthsInAustralia, handleSubmit, handleReset }) => {
  const handleResidencyChange = (e) => {
    setResidencyStatus(e.target.value);
    if (e.target.value !== 'part-year') {
      setMonthsInAustralia('');
    }
  };

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Tax Calculator
      </Typography>
      <form onSubmit={handleSubmit}>
        <StyledTextField
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
        </StyledTextField>

        <StyledTextField
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
            onChange={handleResidencyChange}
            style={{ userSelect: 'none' }}
          >
            <FormControlLabel value="resident" control={<Radio />} label="Resident for full year" style={{ userSelect: 'none' }} />
            <FormControlLabel value="non-resident" control={<Radio />} label="Non-resident for full year" style={{ userSelect: 'none' }} />
            <FormControlLabel value="part-year" control={<Radio />} label="Part-year resident" style={{ userSelect: 'none' }} />
          </RadioGroup>
        </StyledFormControl>

        {residencyStatus === 'part-year' && (
          <StyledTextField
            select
            label="Select number of months in Australia"
            value={monthsInAustralia}
            onChange={(e) => setMonthsInAustralia(e.target.value)}
            fullWidth
            margin="normal"
            required
          >
            {[...Array(12).keys()].map((month) => (
              <MenuItem key={month + 1} value={month + 1}>{month + 1}</MenuItem>
            ))}
          </StyledTextField>
        )}

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
};

export default FormComponent;
