import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  incrementFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

    return (
      <div>
        <Section title="Leave Feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.incrementFeedback} />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
