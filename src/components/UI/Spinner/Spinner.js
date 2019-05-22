import React from 'react';
import classes from './Spinner.css';

const Spinner = (props) => {
  return (
    <React.Fragment>
      <div className={classes.loader}/>
      <div className={classes.loaderMessage}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Spinner;