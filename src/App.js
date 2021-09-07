import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statictics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [totalClick, calcTotal] = useState(0);
  const [feedbackPercentage, countPositiveFeedback] = useState(0);

  const onLeaveFeedback = (e) => {
    const name = e.currentTarget.textContent;

    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    calcTotal(good + neutral + bad);
    countPositiveFeedback(Math.round((good / totalClick) * 100));
  }, [good, neutral, bad, totalClick]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          options={{ good, neutral, bad }}
          total={totalClick}
          positivePercentage={feedbackPercentage}
        />
      </Section>
    </>
  );
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
