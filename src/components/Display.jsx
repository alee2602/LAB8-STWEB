import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/display.module.scss';

function Display ({ value }) {
    return <div className={styles.display}>{value || '0'}</div>;
};

Display.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Display;