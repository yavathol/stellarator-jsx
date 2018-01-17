import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

function Notification({children, type}) {
    return (
        <div className={`'notification notification-${type}`}>
            {type.toUpperCase()}: {children}
        </div>
    );
}

Notification.defaultProps = {
    type: 'info',
};

Notification.propTypes = {
    type: PropTypes.oneOf(['success', 'danger', 'info']),
};

export default Notification;