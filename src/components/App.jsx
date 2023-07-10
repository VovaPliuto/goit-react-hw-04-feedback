import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [goodNumb, setGoodNumb] = useState(0);
  const [neutralNumb, setNeutralNumb] = useState(0);
  const [badNumb, setBadNumb] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleBtnClick = option => {
    console.log(options);
    switch (option) {
      case 'good':
        setGoodNumb(prev => prev + 1);
        break;

      case 'neutral':
        setNeutralNumb(prev => prev + 1);
        break;

      case 'bad':
        setBadNumb(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return goodNumb + neutralNumb + badNumb;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((goodNumb / countTotalFeedback()) * 100).toFixed();
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={goodNumb}
            neutral={neutralNumb}
            bad={badNumb}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};
