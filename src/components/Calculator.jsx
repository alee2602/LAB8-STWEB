"use client";

import React, { useState } from 'react';
import styles from '@/styles/calculator.module.scss';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [operation, setOperation] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [getNewValue, setNewValue] = useState(false);

  const handleNumberClick = (number) => {
    if (getNewValue) {
      setDisplay(number);
      setNewValue(false);
    } else {
      if (display.length < 9) {
        setDisplay(display + number);
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
    } else if (operation === '%') {
      return firstValue % secondValue;
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
    setDisplay('');
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

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{display || '0'}</div>
      <div className={styles.keypad}>
        <button className={`${styles.button} ${styles.operation}`} onClick={handleClearClick}>CE</button>
        <button className={`${styles.button} ${styles.operation}`} onClick={() => setDisplay('')}>C</button>
        <button className={`${styles.button} ${styles.operation}`} onClick={handlePlusMinusClick}>+/-</button>
        <button className={`${styles.button} ${styles.operation}`} onClick={() => handleOperationClick('%')}>%</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('7')}>7</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('8')}>8</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('9')}>9</button>
        <button className={`${styles.button} ${styles.operation}`} onClick={() => handleOperationClick('/')}>/</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('4')}>4</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('5')}>5</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('6')}>6</button>
        <button className={`${styles.button} ${styles.operation}`} onClick={() => handleOperationClick('*')}>*</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('1')}>1</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('2')}>2</button>
        <button className={`${styles.button} ${styles.number}`} onClick={() => handleNumberClick('3')}>3</button>
        <button className={`${styles.button} ${styles.operation}`} onClick={() => handleOperationClick('-')}>-</button>
        <button className={`${styles.button} ${styles.number} ${styles.zero}`} onClick={() => handleNumberClick('0')}>0</button>
        <button className={`${styles.button} ${styles.number}`} onClick={handleDecimalClick}>.</button>
        <button className={`${styles.button} ${styles.operation}`} onClick={() => handleOperationClick('+')}>+</button>
        <button className={`${styles.button} ${styles.equals}`} onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;

