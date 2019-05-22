import React from 'react';
import classes from './Jumbotron.css';

const Jumbotron = (props) => {
  return (
    <div className={classes.WelcomeMessage}>
      {props.children}
    </div>
  );
};

export default Jumbotron;