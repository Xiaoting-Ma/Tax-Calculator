import React, { useState } from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import '../App.css'; 
import FormComponent from './FormComponent';
import ResultComponent from './ResultComponent';
import FooterComponent from './FooterComponent';

const StyledContainer = styled(Container)`
  padding: 20px;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.8); /* 0.8 transparent */
  border-radius: 10px;
`;

const TaxCalculator = () => {
  const [incomeYear, setIncomeYear] = useState('');
  const [taxableIncome, setTaxableIncome] = useState('');
  const [residencyStatus, setResidencyStatus] = useState('');
  const [monthsInAustralia, setMonthsInAustralia] = useState('');
  const [result, setResult] = useState(null);

  const calculateTax = (income, residencyStatus, monthsInAustralia) => {
    // ATO Policy, logic part
    let tax = 0;

    if (residencyStatus === 'resident') {
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
    } else if (residencyStatus === 'non-resident') {
      if (income <= 120000) {
        tax = income * 0.325;
      } else if (income <= 180000) {
        tax = 39000 + (income - 120000) * 0.37;
      } else {
        tax = 61200 + (income - 180000) * 0.45;
      }
    } else if (residencyStatus === 'part-year') {
      const baseTaxFreeThreshold = 13464;
      const proportionalThreshold = 4736 * (monthsInAustralia / 12);
      const totalTaxFreeThreshold = baseTaxFreeThreshold + proportionalThreshold;

      let adjustedTaxableIncome = income - totalTaxFreeThreshold;

      if (adjustedTaxableIncome <= 0) {
        tax = 0;
      } else if (adjustedTaxableIncome <= 45000 - totalTaxFreeThreshold) {
        tax = adjustedTaxableIncome * 0.19;
      } else if (adjustedTaxableIncome <= 120000 - totalTaxFreeThreshold) {
        tax = (45000 - totalTaxFreeThreshold) * 0.19 + (adjustedTaxableIncome - (45000 - totalTaxFreeThreshold)) * 0.325;
      } else if (adjustedTaxableIncome <= 180000 - totalTaxFreeThreshold) {
        tax = (45000 - totalTaxFreeThreshold) * 0.19 + (120000 - 45000) * 0.325 + (adjustedTaxableIncome - (120000 - totalTaxFreeThreshold)) * 0.37;
      } else {
        tax = (45000 - totalTaxFreeThreshold) * 0.19 + (120000 - 45000) * 0.325 + (180000 - 120000) * 0.37 + (adjustedTaxableIncome - (180000 - totalTaxFreeThreshold)) * 0.45;
      }
    }
    return tax.toFixed(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tax = calculateTax(parseFloat(taxableIncome), residencyStatus, monthsInAustralia);
    setResult(`The estimated tax on your taxable income is $${tax}`);
  };

  const handleReset = () => {
    setIncomeYear('');
    setTaxableIncome('');
    setResidencyStatus('');
    setMonthsInAustralia('');
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
            monthsInAustralia={monthsInAustralia}
            setMonthsInAustralia={setMonthsInAustralia}
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
