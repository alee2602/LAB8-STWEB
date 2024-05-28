import React from 'react';
import PropTypes from 'prop-types';
import Button from "@/components/Button";
import styles from '@/styles/keypad.module.scss';

function Keypad ({ onButtonClick }) {
    const buttons = [
        { label: 'CE', type: 'operation' },
        { label: 'C', type: 'operation' },
        { label: '+/-', type: 'operation' },
        { label: '%', type: 'operation' },
        { label: '7', type: 'number' },
        { label: '8', type: 'number' },
        { label: '9', type: 'number' },
        { label: '/', type: 'operation' },
        { label: '4', type: 'number' },
        { label: '5', type: 'number' },
        { label: '6', type: 'number' },
        { label: '*', type: 'operation' },
        { label: '1', type: 'number' },
        { label: '2', type: 'number' },
        { label: '3', type: 'number' },
        { label: '-', type: 'operation' },
        { label: '0', type: 'zero' },
        { label: '.', type: 'number' },
        { label: '+', type: 'operation' },
        { label: '=', type: 'equals' },
    ];

    return (
        <div className={styles.keypad}>
            {buttons.map((button) => (
                <Button
                    key={button.label}
                    label={button.label}
                    onClick={() => onButtonClick(button.label)}
                    type={button.type}
                />
            ))}
        </div>
    );
};

Keypad.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
