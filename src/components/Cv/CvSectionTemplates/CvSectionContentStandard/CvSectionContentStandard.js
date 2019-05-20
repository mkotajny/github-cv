import React from 'react';
import classes from './CvSectionContentStandard.css';

const CvSectionContentStandard = (props) => {
  return (
    <React.Fragment>
      <div className={classes.sectionContent}>
        <p>{props.children}</p>
      </div>
      <div className={classes.clear}></div>
      
    </React.Fragment>
  );
};

export default CvSectionContentStandard;