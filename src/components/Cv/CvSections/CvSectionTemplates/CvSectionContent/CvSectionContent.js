import React from 'react';
import classes from './CvSectionContent.css';
import CvSection from '../CvSection/CvSection';

const CvSectionContent = (props) => {
  return (
    <CvSection title={props.title}>
      <div className={classes.sectionContent}>
        {props.children}
      </div>
      <div className={classes.clear}></div>
    </CvSection>
  );
};

export default CvSectionContent;