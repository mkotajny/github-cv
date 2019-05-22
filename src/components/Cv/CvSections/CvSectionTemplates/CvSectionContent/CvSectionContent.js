import React from 'react';
import classes from './CvSectionContent.css';
import CvSection from '../CvSection/CvSection';
import PropTypes from 'prop-types';

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

CvSectionContent.propTypes = { title: PropTypes.string.isRequired };

export default CvSectionContent;