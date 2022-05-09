import React from 'react';
import PropTypes from 'prop-types';


const NotificationMessage = ({ message }) => {
    return (
        <p>{message}</p>
    );
}
NotificationMessage.prototype = {
    message: PropTypes.string,
};

export default NotificationMessage;