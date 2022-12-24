// import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { TitleStyled, TextStyled } from './Feedback.styled';
import { Component } from 'react';
import { Buttons } from './Buttons';
import { Statistics } from './Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  sectionStyles = {
    fontFamily: 'body',
    width: 'section',
    m: '20px auto',
    p: [4],
    bg: 'white',
    border: ' 1px solid',
    borderColor: 'border',
    borderRadius: 'normal',
    boxShadow: 'main',
    as: 'section',
  };

  handleCheckEmptyState = () => {
    const { good, neutral, bad } = this.state;
    return !good && !neutral && !bad;
  };

  handleFeedbackIncr = event => {
    const { name } = event.target;
    // this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    this.setState(prevState => {
      const newState = prevState[name] + 1;
      return { [name]: newState };
    });
  };

  handleKeyMap = () => Object.keys(this.state);
  handleGetStateValue = item => this.state[item];

  handleStatisticsMap = statistics => Object.values(statistics);

  countTotalFeedback = () =>
    this.setState(currentState => {
      this.countTotalFeedback(currentState);
      // console.log('this.handleStatisticsMap()', prevState);
      const totalFeedback = this.handleStatisticsMap().reduce(
        (total, item) => total + item,
        0
      );
      return {
        ...currentState,
        total: totalFeedback,
      };
    });
  countPositiveFeedbackPercentage() {}

  render() {
    return (
      <Box {...this.sectionStyles}>
        <TitleStyled>Please leave feedback</TitleStyled>

        <Buttons
          keyMap={this.handleKeyMap()}
          onFeedbackIncr={this.handleFeedbackIncr}
        ></Buttons>

        <TitleStyled>Statistics</TitleStyled>

        <Statistics
          isEmptyState={this.handleCheckEmptyState()}
          keyMap={this.handleKeyMap()}
          getStateValue={this.handleGetStateValue}
        ></Statistics>
      </Box>
    );
  }
}

// Feedback.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };
