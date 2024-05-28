import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Keypad from "@/components/Keypad";

test('Keypad renders buttons correctly', () => {
    const { getByText } = render(<Keypad onButtonClick={() => { }} />);
    expect(getByText('7')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
});

test('clicking a number button triggers correct function', () => {
    const handleButtonClick = jest.fn();
    render(<Keypad onButtonClick={handleButtonClick} />);
    fireEvent.click(screen.getByText('1'));
    expect(handleButtonClick).toHaveBeenCalledWith('1');
});