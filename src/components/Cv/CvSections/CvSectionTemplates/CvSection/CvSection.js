import React from 'react';
import classes from './CvSection.css';

const CvSection = (props) => {
  return (
    <div className={classes.section}>
      <div className={classes.sectionTitle}>
        <h1>{props.title}</h1>
      </div>        
      {props.children}
    </div>
  );
};

export default CvSection;