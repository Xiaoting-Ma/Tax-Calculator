import React, { useState } from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import '../App.css'; 
import FormComponent from './FormComponent';
import ResultComponent from './ResultComponent';
import FooterComponent from './FooterComponent';

const StyledContainer = styled(Container)`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Half trasparent */
  border-radius: 10px;
`;

const TaxCalculator = () => {
  const [incomeYear, setIncomeYear] = useState('');
  const [taxableIncome, setTaxableIncome] = useState('');
  const [residencyStatus, setResidencyStatus] = useState('');
  const [result, setResult] = useState(null);

  const calculateTax = (income) => {
    // ACT tax policy
    let tax = 0;
    if (income <= 18200) {
      tax = 0;
    } else if (income <= 45000) {
      tax = (income - 18200) * 0.19;
    } else if (income <= 120000) {
      tax = 5092 + (income - 45000) * 0.325;
    } else if (income <= 180000) {
      tax = 29467 + (income - 120000) * 0.37;
    } else {
      tax = 51667 + (income - 180000) * 0.45;
    }
    return tax.toFixed(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tax = calculateTax(parseFloat(taxableIncome));
    setResult(`The estimated tax on your taxable income is $${tax}`);
  };

  const handleReset = () => {
    setIncomeYear('');
    setTaxableIncome('');
    setResidencyStatus('');
    setResult(null);
  };

  const handleBack = () => {
    setResult(null);
  };

  return (
    <>
      <StyledContainer maxWidth="sm" style={{ userSelect: 'none' }}>
        {!result ? (
          <FormComponent 
            incomeYear={incomeYear} 
            setIncomeYear={setIncomeYear}
            taxableIncome={taxableIncome} 
            setTaxableIncome={setTaxableIncome} 
            residencyStatus={residencyStatus} 
            setResidencyStatus={setResidencyStatus} 
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />
        ) : (
          <ResultComponent 
            result={result} 
            handleBack={handleBack} 
            handleReset={handleReset}
          />
        )}
      </StyledContainer>
      <FooterComponent />
    </>
  );
};

export default TaxCalculator;
