import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/button.module.scss';

function Button ({ label, onClick, type }) {
    return (
        <button
            className={`${styles.button} ${styles[type]}`}
            onClick={onClick}
            aria-label={label}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['number', 'operation', 'equals', 'zero']).isRequired,
};

export default Button;
