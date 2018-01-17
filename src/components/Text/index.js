import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

function Text({children, heading, size}) {
    return (
        <p className={`text ${heading && 'text-heading'} text-${size}`}>{children}</p>
    );
}

Text.defaultProps = {
    heading: false,
    size: 'medium',
};

Text.propTypes = {
    heading: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),

};

export default Text;