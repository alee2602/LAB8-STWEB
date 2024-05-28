import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from "@/components/Button";

test('renders button with correct label', () => {
    render(<Button label="1" type="number" onClick={() => {}} />);
    expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument();
});

test('button click triggers correct function', () => {
    const handleClick = jest.fn();
    render(<Button label="1" type="number" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: /1/ }));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
