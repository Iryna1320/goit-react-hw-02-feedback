import React, { Component } from 'react';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = options => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const res = good + neutral + bad;
    return res;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    // (good/total)*100
    const result = (good / (good + neutral + bad)) * 100;

    if (isNaN(result)) {
      return 'Отзывов нет';
    } else return `${result}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}

export default App;
