import React, { Component } from 'react';
import classes from './LandingPage.css';
import Jumbotron from '../Jumbotron/Jumbotron';
import GithubAccountForm from '../GithubAccountForm/GithubAccountForm';


class LandingPage extends Component {
  render() {
    return (
      <div className={classes.WelcomeContainer}>
        <Jumbotron>Generate Github-CV</Jumbotron>
        <GithubAccountForm/>
      </div>
    );
  }
}

export default LandingPage;