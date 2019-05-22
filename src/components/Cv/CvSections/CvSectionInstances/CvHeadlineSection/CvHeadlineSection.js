import React from 'react';
import classes from './CvHeadlineSection.css';
import PropTypes from 'prop-types';

const CvHeadlineSection = (props) => {
  return (
    <div className={classes.mainDetails}> 
      <div className={classes.headShot}>
        <img src={props.avatarUrl} alt={props.name} />
      </div>
      <div className={classes.name}>
        <h1>{props.displayName}</h1>
        <h2>Github Profile</h2>
      </div>
      <div className={classes.contactDetails}>
        <a href={props.webPageUrl}>{props.webPageUrl}</a>
      </div>
      <div className={classes.clear}></div>
    </div>
  );
}

CvHeadlineSection.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  webPageUrl: PropTypes.string.isRequired
};

export default CvHeadlineSection;