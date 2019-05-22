import React from 'react';
import classes from './CvSection.css';
import PropTypes from 'prop-types';

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

CvSection.propTypes = { title: PropTypes.string.isRequired };

export default CvSection;