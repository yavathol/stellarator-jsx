import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

function Input({type, name, placeholder, label, value, size, error, onInputChange}) {
    let errorMessage = null;
    if (error) {
        errorMessage = <span className='errorMessage'>{error}</span>;
    }

    let input = null;
    if (type === 'textarea') {
        input = <textarea className={size}
                          name={name}
                          placeholder={placeholder}
                          value={value}
                          onChange={onInputChange}
        />;
    } else {
        input = <input className={size}
                       type={type}
                       name={name}
                       placeholder={placeholder}
                       value={value}
                       onChange={onInputChange}
        />;
    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            {input}
            {errorMessage}
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