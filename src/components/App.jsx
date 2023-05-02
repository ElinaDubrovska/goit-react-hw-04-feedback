import {  useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


 const buttonHandler = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        throw new Error('Not supported type');
    }
  }
  const variants = Object.keys({ good, neutral, bad });

  return(
      <>
    <Section title = "Please leave feedback">
      <FeedbackOptions variants={variants}
      onClick = {buttonHandler}>
        
      </FeedbackOptions>
    </Section>
    <Section title = "Statistics">
          { (good + bad + neutral)>0 ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + bad + neutral}
            positivePercentage = {((good*100)/ (good + bad + neutral)).toFixed(2) }
          /> : <Notification message="There is no feedback"/>
         }
       </Section>
      </>
    )
  }
