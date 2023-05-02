import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  buttonHandler = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  }
  countTotalFeedback = ()=>{
    const { good, neutral, bad } = this.state;
    return(good + bad + neutral)
  }

  countPositiveFeedbackPercentage = ()=>{
    const { good, neutral, bad } = this.state;
    return((good*100)/ (good + bad + neutral)).toFixed(0)
  }
  render(){
    const { good, neutral, bad } = this.state;
    return(
      <>
    <Section title = "Please leave feedback">
      <FeedbackOptions variants={Object.keys(this.state)}
      onClick = {this.buttonHandler}>
        
      </FeedbackOptions>
    </Section>
    <Section title = "Statistics">
          { (good + bad + neutral)>0 ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage = {this.countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"/>
         }
       </Section>
      </>
    )
  }
}