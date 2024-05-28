"use client";

import React, { useState} from 'react';
import Display from "@/components/Display";
import Keypad from "@/components/Keypad";
import styles from '@/styles/calculator.module.scss';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [getNewValue, setNewValue] = useState(false);

  const handleNumberClick = (number) => {
    if (getNewValue) {
      setDisplay(number);
      setNewValue(false);
    } else {
      if (display.length < 9) {
        setDisplay(display === '0' ? number : display + number);
      }
    }
  };

  const handleOperationClick = (nextOperation) => {
    const value = parseFloat(display);
    if (previousValue == null) {
      setPreviousValue(value);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, value, operation);

      if (newValue > 999999999 || newValue < 0) {
        setDisplay('ERROR');
      } else {
        setDisplay(String(newValue).slice(0, 9));
        setPreviousValue(newValue);
      }
    }

    setNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    if (operation === '+') {
      return firstValue + secondValue;
    } else if (operation === '-') {
      return firstValue - secondValue;
    } else if (operation === '*') {
      return firstValue * secondValue;
    } else if (operation === '/') {
      return firstValue / secondValue;
    } 
    return secondValue;
  };

  const handleEqualClick = () => {
    const value = parseFloat(display);
    if (operation && previousValue != null) {
      const newValue = calculate(previousValue, value, operation);
      if (newValue > 999999999 || newValue < 0) {
        setDisplay('ERROR');
      } else {
        setDisplay(String(newValue).slice(0, 9));
      }
      setPreviousValue(null);
      setOperation(null);
      setNewValue(true);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewValue(false);
  };

  const handlePlusMinusClick = () => {
    if (display) {
      if (display.charAt(0) === '-') {
        setDisplay(display.substring(1));
      } else {
        setDisplay('-' + display);
      }
    }
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handlePercentageClick = () => {
    const value = parseFloat(display);
    if (!isNaN(value)) {
      setDisplay(String(value / 100).slice(0, 9));
      setNewValue(true);
    }
  };

  const handleButtonClick = (label) => {
    if (!isNaN(label)) {
      handleNumberClick(label);
    } else if (label === 'CE') {
      setDisplay('0');
    } else if (label === 'C') {
      handleClearClick();
    } else if (label === '+/-') {
      handlePlusMinusClick();
    } else if (label === '.') {
      handleDecimalClick();
    } else if (label === '=') {
      handleEqualClick();
    } else if (label === '%') {
      handlePercentageClick();
    } else {
      handleOperationClick(label);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <Display value={display} />
        <Keypad onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
