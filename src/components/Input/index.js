import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

function Input({type, name, placeholder, label, value, size, error, onInputChange}) {
    const ErrorMessage = error && <span className="errorMessage">{error}</span>;
    const InputElement = type === 'textarea' ? 'textarea' : 'input';

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <InputElement className={size}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onInputChange}
                    readOnly={!onInputChange}
            />
            {ErrorMessage}
        </div>
    );
}

Input.defaultProps = {
    type: 'text',
    size: 'medium',
};

Input.propTypes = {
    type: PropTypes.oneOf(['email', 'text', 'phone', 'textarea', 'password']),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    error: PropTypes.string,
    onInputChange: PropTypes.func
};

export default Input;