import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from "@/components/Calculator";

test('initial state is correct', () => {
    render(<Calculator />);
    const displayElement = screen.getByRole('status');
    expect(displayElement).toHaveTextContent('0');
});

test('performs multiplication correctly', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: '*' }));
    fireEvent.click(screen.getByRole('button', { name: '6' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    const displayElement = screen.getByRole('status');
    expect(displayElement).toHaveTextContent('48');
});

test('handles percentage correctly', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /5/ }));
    fireEvent.click(screen.getByRole('button', { name: /%/ }));
    expect(screen.getByRole('status')).toHaveTextContent('0.05');
});

test('toggles plus/minus sign', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /5/ }));
    fireEvent.click(screen.getByRole('button', { name: /\+\/-/ }));
    expect(screen.getByRole('status')).toHaveTextContent('-5');
    fireEvent.click(screen.getByRole('button', { name: /\+\/-/ }));
    expect(screen.getByRole('status')).toHaveTextContent('5');
});
