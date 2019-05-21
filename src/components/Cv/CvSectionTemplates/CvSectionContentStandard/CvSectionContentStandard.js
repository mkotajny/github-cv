import React from 'react';
import classes from './CvSectionContentStandard.css';
import CvSection from '../CvSection/CvSection';

const CvSectionContentStandard = (props) => {
  return (
    <CvSection title={props.title}>
      <div className={classes.sectionContent}>
        <p>{props.children}</p>
      </div>
      <div className={classes.clear}></div>
    </CvSection>
  );
};

export default CvSectionContentStandard;