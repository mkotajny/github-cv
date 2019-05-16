import React from 'react';
import classes from './LandingPage.css';
import Jumbotron from '../Jumbotron/Jumbotron';
import GithubAccountForm from '../GithubAccountForm/GithubAccountForm';

const LandingPage = () => {
  console.log(classes.WelcomeContainer);
  return (
    <div className={classes.WelcomeContainer}>
      <Jumbotron>Create your Github-CV</Jumbotron>
      <GithubAccountForm/>
    </div>
  );
};

export default LandingPage;