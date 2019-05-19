import React from 'react';
import classes from './CvBlockHeadline.css';
import withApiFetching from '../../HoC/withApiFetching/withApiFetching';


const CvBlockHeadline = (props) => {
  return (
    <React.Fragment>
      <div className={classes.mainDetails}> 
        <div className={classes.headShot}>
          <img src={props.data.avatar_url} alt={props.data.name} />
        </div>
        <div className={classes.name}>
          <h1>{props.data.name}</h1>
          <h2>Github Profile</h2>
        </div>
        <div className={classes.contactDetails}>
          <a href={props.data.blog}>{props.data.blog}</a>
        </div>
        <div className={classes.clear}></div>
      </div>
    </React.Fragment>
  );
}

export default withApiFetching()(CvBlockHeadline);