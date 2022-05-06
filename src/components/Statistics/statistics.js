

import React from 'react';
import PropTypes from 'prop-types';
import s from './statistics.module.css'

import NotificationMessage from './notificationMessage';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <> {total === 0 ? (<NotificationMessage />) :
            (<ul className={s.list}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total} </li>
                <li>Positive feedback: {total === 0 ? '0' : positivePercentage}%</li>
            </ul>)}

        </>


    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}


export default Statistics