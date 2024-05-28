
import React from 'react';
import Button from '@/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const NumberButton = () => <Button label="1" onClick={() => {}} />;
export const OperationButton = () => <Button label="+" onClick={() => {}} />;
export const EqualsButton = () => <Button label="=" onClick={() => {}} />;
