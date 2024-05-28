import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from "@/components/Display";

test('renders display with correct value', () => {
    render(<Display value="12345" />);
    expect(screen.getByText('12345')).toBeInTheDocument();
});

test('renders default value when no value is provided', () => {
    render(<Display value="0" />); 
    expect(screen.getByText('0')).toBeInTheDocument();
});
