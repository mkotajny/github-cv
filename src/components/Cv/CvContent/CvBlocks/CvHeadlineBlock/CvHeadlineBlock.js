import React from 'react';
import classes from './CvHeadlineBlock.css';

const CvHeadlineBlock = (props) => {
  return (
    <div className={classes.mainDetails}> 
      <div className={classes.headShot}>
        <img src={props.avatarUrl} alt={props.name} />
      </div>
      <div className={classes.name}>
        <h1>{props.name}</h1>
        <h2>Github Profile</h2>
      </div>
      <div className={classes.contactDetails}>
        <a href={props.webPageUrl}>{props.webPageUrl}</a>
      </div>
      <div className={classes.clear}></div>
    </div>
  );
}

export default CvHeadlineBlock;