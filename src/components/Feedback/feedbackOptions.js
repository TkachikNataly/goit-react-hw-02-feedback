

import React from 'react';
import PropTypes from 'prop-types';

import s from './feedbackOptions.module.css'





const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(option => (
            <button
                key={option}
                className={s.button}
                type='button'
                onClick={onLeaveFeedback}>
                {option}
            </button>
        ))
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func
}


export default FeedbackOptions