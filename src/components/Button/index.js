import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

function Button({children, type, disabled, loading, onButtonClick}) {
    return (
        <button
            className={`btn btn-${type}`}
            disabled={disabled || loading}
            onClick={onButtonClick}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
}

Button.defaultProps = {
    type: 'primary'
};

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onButtonClick: PropTypes.func
};

export default Button;