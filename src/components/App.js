import React, { Component } from 'react';
import FeedbackOptions from './Feedback'
import Statistics from './Statistics';
import Section from './Section';



class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    buttons = ['Good', 'Neutral', 'Bad'];

    onLeaveFeedback = e => {
        const name = e.currentTarget.innerText.toLowerCase();
        return this.setState({ [name]: this.state[name] + 1 });
    };



    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((previousValue, number) => {
            return previousValue + number;
        }, 0);

        return total;

    }

    countPositiveFeedbackPercentage = () => {
        const positiveFeedback = Math.round(
            ((this.state.good) / this.countTotalFeedback()) * 100);
        return positiveFeedback;

    }


    render() {
        return (
            <div>

                <Section
                    title='Please leave feedback'>

                    <FeedbackOptions
                        options={this.buttons}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>


                <Section
                    title='Statistics'>

                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </div>
        )

    }

};





export default App;