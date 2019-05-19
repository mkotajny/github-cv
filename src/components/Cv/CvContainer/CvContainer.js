import React from 'react';
import classes from './CvContainer.css';
import CvBlockHeadline from '../CvBlocks/CvBlockHeadline/CvBlockHeadline';



const CvContainer = (props) => {
  const url = 'https://api.github.com/users/' + props.match.params.login;

  return (
    <div className={classes.CvContainer}>
      <CvBlockHeadline url={url}/>
    </div>
  );
}

export default CvContainer;